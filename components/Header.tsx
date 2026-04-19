"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { BookOpen, UserRound } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { useT } from "./LocaleProvider";
import { createClient } from "@/lib/supabase/browser";

export function Header() {
  const t = useT();
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setReady(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 text-white">
            <BookOpen size={16} />
          </span>
          <span>{t({ en: "AP Review", zh: "AP 复习" })}</span>
        </Link>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          {ready && (user ? (
            <Link
              href="/account"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
            >
              <UserRound size={13} />
              {t({ en: "Account", zh: "我的" })}
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white hover:bg-slate-700"
            >
              {t({ en: "Log in", zh: "登录" })}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-xs text-slate-500">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6">
        <span>
          {t({
            en: "AP® is a trademark of the College Board, which is not affiliated with and does not endorse this site.",
            zh: "AP® 为 College Board 注册商标;本站与 College Board 无关,亦未获其认可。",
          })}
        </span>
      </div>
    </footer>
  );
}
