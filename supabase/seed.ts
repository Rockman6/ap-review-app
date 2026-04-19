/**
 * Seed Supabase with the bundled content from lib/content.ts.
 *
 * Requires a service-role key (bypasses RLS). Put it in web/.env.local:
 *   SUPABASE_SERVICE_ROLE_KEY=sb_secret_...
 *
 * Run from web/:
 *   npm run seed            # fails if content already exists
 *   npm run seed -- --wipe  # deletes existing content first, then re-seeds
 */
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  apMicro,
  topicNotes,
  topicQuestions,
  unitQuestions,
  type Question,
} from "../lib/content";

// ---- env ---------------------------------------------------------------
const envPath = resolve(__dirname, "../.env.local");
try {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch {
  // .env.local is optional — fall through to real process.env
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. " +
      "Add the service-role key to web/.env.local (Supabase → Settings → API).",
  );
  process.exit(1);
}

const db = createClient(url, key, { auth: { persistSession: false } });
const wipe = process.argv.includes("--wipe");

// ---- helpers -----------------------------------------------------------
function questionRows(
  rows: { external_id: string; topic_id: string | null; unit_id: string | null; q: Question; position: number }[],
) {
  return rows.map((r) => ({
    external_id: r.external_id,
    topic_id: r.topic_id,
    unit_id: r.unit_id,
    prompt: r.q.prompt,
    figure: r.q.figure ?? null,
    choices: r.q.choices,
    answer_id: r.q.answerId,
    explanation: r.q.explanation,
    position: r.position,
  }));
}

// ---- seed --------------------------------------------------------------
async function main() {
  // Refuse to run on top of existing content unless --wipe.
  const { count, error: countErr } = await db
    .from("subjects")
    .select("slug", { count: "exact", head: true });
  if (countErr) throw countErr;
  if (count && count > 0) {
    if (!wipe) {
      console.error(
        `subjects table already has ${count} row(s). Re-run with --wipe to replace.`,
      );
      process.exit(1);
    }
    console.log("Wiping existing content…");
    // Order matters: questions → topics → units → subjects (FK cascades also
    // handle this, but being explicit keeps the output readable).
    for (const t of ["questions", "topics", "units", "subjects"]) {
      const { error } = await db.from(t).delete().not("position", "is", null);
      if (error) throw error;
    }
  }

  console.log(`Seeding subject: ${apMicro.slug}`);

  const { error: subjErr } = await db.from("subjects").insert({
    slug: apMicro.slug,
    title: apMicro.title,
    tagline: apMicro.tagline,
    position: 0,
  });
  if (subjErr) throw subjErr;

  for (const [unitIdx, unit] of apMicro.units.entries()) {
    const { data: unitRow, error: unitErr } = await db
      .from("units")
      .insert({
        subject_slug: apMicro.slug,
        slug: unit.slug,
        number: unit.number,
        title: unit.title,
        description: unit.description,
        position: unitIdx,
      })
      .select("id")
      .single();
    if (unitErr) throw unitErr;
    const unitId = unitRow!.id;

    for (const [topicIdx, topic] of unit.topics.entries()) {
      const notesKey = `${unit.slug}/${topic.slug}`;
      const { data: topicRow, error: topicErr } = await db
        .from("topics")
        .insert({
          unit_id: unitId,
          slug: topic.slug,
          title: topic.title,
          summary: topic.summary,
          notes: topicNotes[notesKey] ?? [],
          position: topicIdx,
        })
        .select("id")
        .single();
      if (topicErr) throw topicErr;
      const topicId = topicRow!.id;

      const tqs = topicQuestions[notesKey] ?? [];
      if (tqs.length) {
        const { error } = await db.from("questions").insert(
          questionRows(
            tqs.map((q, i) => ({
              external_id: q.id,
              topic_id: topicId,
              unit_id: null,
              q,
              position: i,
            })),
          ),
        );
        if (error) throw error;
      }
    }

    const uqs = unitQuestions[unit.slug] ?? [];
    if (uqs.length) {
      const { error } = await db.from("questions").insert(
        questionRows(
          uqs.map((q, i) => ({
            external_id: q.id,
            topic_id: null,
            unit_id: unitId,
            q,
            position: i,
          })),
        ),
      );
      if (error) throw error;
    }

    console.log(
      `  unit ${unit.slug}: ${unit.topics.length} topics, ${uqs.length} unit-level questions`,
    );
  }

  console.log("Seed complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
