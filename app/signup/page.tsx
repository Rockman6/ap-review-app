"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { useT } from "@/components/LocaleProvider";
import { signUp } from "@/app/auth/actions";

export default function SignupPage() {
  const t = useT();
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();

  return (
    <div className="mx-auto max-w-sm px-4 py-16">
      <h1 className="text-2xl font-semibold">{t({ en: "Create your account", zh: "创建账号" })}</h1>
      <p className="mt-1 text-sm text-slate-600">
        {t({ en: "Track your progress across all AP topics.", zh: "追踪你在所有 AP 主题上的学习进度。" })}
      </p>

      <form
        className="mt-6 space-y-4"
        action={(fd) =>
          start(async () => {
            setError(null);
            const res = await signUp(fd);
            if (res?.error) setError(res.error);
          })
        }
      >
        <Field name="display_name" type="text" label={t({ en: "Name", zh: "姓名" })} autoComplete="name" required />
        <Field name="email" type="email" label={t({ en: "Email", zh: "邮箱" })} autoComplete="email" required />
        <Field name="password" type="password" label={t({ en: "Password (min 6 chars)", zh: "密码(至少 6 位)" })} autoComplete="new-password" required minLength={6} />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:bg-slate-400"
        >
          {pending ? t({ en: "Creating account…", zh: "正在创建…" }) : t({ en: "Create account", zh: "创建账号" })}
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-600">
        {t({ en: "Already have an account?", zh: "已有账号?" })}{" "}
        <Link href="/login" className="font-medium text-blue-600 hover:underline">
          {t({ en: "Log in", zh: "登录" })}
        </Link>
      </p>
    </div>
  );
}

function Field({ name, type, label, ...rest }: { name: string; type: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        name={name}
        type={type}
        className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
        {...rest}
      />
    </label>
  );
}
