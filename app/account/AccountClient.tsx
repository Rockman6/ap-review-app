"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { ChevronRight, LogOut, Plus, UserRound, Users } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { createClassAction, joinClassAction, logOut } from "@/app/auth/actions";

type TeachClass = { id: string; name: string; join_code: string; created_at: string };
type Membership = {
  class_id: string;
  joined_at: string;
  className: string;
  teacherName: string | null;
};

export function AccountClient({
  displayName,
  email,
  teaches,
  memberships,
}: {
  displayName: string;
  email: string;
  teaches: TeachClass[];
  memberships: Membership[];
}) {
  const t = useT();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:py-14">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{t({ en: "Hi,", zh: "你好," })} {displayName}</h1>
          <p className="mt-1 text-sm text-slate-600">{email}</p>
        </div>
        <form action={logOut}>
          <button className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100">
            <LogOut size={13} />
            {t({ en: "Log out", zh: "退出登录" })}
          </button>
        </form>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <CreateClassCard />
        <JoinClassCard />
      </div>

      {teaches.length > 0 && (
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            {t({ en: "Classes you teach", zh: "你教的班级" })}
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {teaches.map((c) => (
              <Link
                key={c.id}
                href={`/classes/${c.id}`}
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-300 hover:shadow-sm"
              >
                <div>
                  <div className="font-medium text-slate-900">{c.name}</div>
                  <div className="mt-1 text-xs text-slate-500">
                    {t({ en: "Code", zh: "邀请码" })}:{" "}
                    <span className="font-mono font-semibold tracking-widest text-slate-900">{c.join_code}</span>
                  </div>
                </div>
                <ChevronRight size={16} className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-700" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {memberships.length > 0 && (
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            {t({ en: "Classes you've joined", zh: "你加入的班级" })}
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {memberships.map((m) => (
              <div key={m.class_id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
                <div>
                  <div className="font-medium text-slate-900">{m.className}</div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                    <UserRound size={12} />
                    {m.teacherName ?? t({ en: "Teacher", zh: "老师" })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          {t({ en: "Keep studying", zh: "继续学习" })}
        </h2>
        <Link
          href="/subjects/ap-micro"
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          {t({ en: "Open AP Microeconomics", zh: "打开 AP 微观经济学" })}
          <ChevronRight size={15} />
        </Link>
      </div>
    </div>
  );
}

function CreateClassCard() {
  const t = useT();
  const [error, setError] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);
  const [pending, start] = useTransition();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2 text-slate-900">
        <Plus size={16} className="text-blue-600" />
        <h3 className="font-semibold">{t({ en: "Create a class", zh: "创建班级" })}</h3>
      </div>
      <p className="mt-1 text-sm text-slate-600">
        {t({ en: "Get a join code to share with your students.", zh: "生成一个邀请码分享给你的学生。" })}
      </p>
      <form
        className="mt-4 space-y-2"
        action={(fd) =>
          start(async () => {
            setError(null);
            setCode(null);
            const res = await createClassAction(fd);
            if (res?.error) setError(res.error);
            else if (res?.data?.join_code) setCode(res.data.join_code);
          })
        }
      >
        <input
          name="name"
          type="text"
          placeholder={t({ en: "e.g. Period 3 — AP Micro", zh: "例如:AP 微观 第三节" })}
          className="block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          required
        />
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 disabled:bg-slate-400"
        >
          {pending ? t({ en: "Creating…", zh: "创建中…" }) : t({ en: "Create", zh: "创建" })}
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {code && (
        <div className="mt-3 rounded-lg bg-green-50 p-3 text-sm text-green-900">
          {t({ en: "Your join code:", zh: "邀请码:" })}{" "}
          <span className="font-mono text-base font-semibold tracking-widest">{code}</span>
        </div>
      )}
    </div>
  );
}

function JoinClassCard() {
  const t = useT();
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);
  const [pending, start] = useTransition();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2 text-slate-900">
        <Users size={16} className="text-blue-600" />
        <h3 className="font-semibold">{t({ en: "Join a class", zh: "加入班级" })}</h3>
      </div>
      <p className="mt-1 text-sm text-slate-600">
        {t({ en: "Enter the code your teacher gave you.", zh: "输入老师给你的邀请码。" })}
      </p>
      <form
        className="mt-4 space-y-2"
        action={(fd) =>
          start(async () => {
            setError(null);
            setOk(false);
            const res = await joinClassAction(fd);
            if (res?.error) setError(res.error);
            else setOk(true);
          })
        }
      >
        <input
          name="code"
          type="text"
          placeholder={t({ en: "6-character code", zh: "6 位邀请码" })}
          className="block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm uppercase tracking-widest outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          required
          maxLength={10}
        />
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 disabled:bg-slate-400"
        >
          {pending ? t({ en: "Joining…", zh: "加入中…" }) : t({ en: "Join", zh: "加入" })}
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {ok && <p className="mt-2 text-sm text-green-700">{t({ en: "Joined! Reload to see it listed.", zh: "已加入!刷新页面即可看到。" })}</p>}
    </div>
  );
}
