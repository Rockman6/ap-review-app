"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { useT } from "@/components/LocaleProvider";
import { logIn } from "@/app/auth/actions";

export default function LoginPage() {
  const t = useT();
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();

  return (
    <div className="mx-auto max-w-sm px-4 py-16">
      <h1 className="text-2xl font-semibold">{t({ en: "Log in", zh: "登录" })}</h1>
      <p className="mt-1 text-sm text-slate-600">
        {t({ en: "Welcome back.", zh: "欢迎回来。" })}
      </p>

      <form
        className="mt-6 space-y-4"
        action={(fd) =>
          start(async () => {
            setError(null);
            const res = await logIn(fd);
            if (res?.error) setError(res.error);
          })
        }
      >
        <Field name="email" type="email" label={t({ en: "Email", zh: "邮箱" })} autoComplete="email" required />
        <Field name="password" type="password" label={t({ en: "Password", zh: "密码" })} autoComplete="current-password" required />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-700 disabled:bg-slate-400"
        >
          {pending ? t({ en: "Logging in…", zh: "登录中…" }) : t({ en: "Log in", zh: "登录" })}
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-600">
        {t({ en: "Don't have an account?", zh: "还没有账号?" })}{" "}
        <Link href="/signup" className="font-medium text-blue-600 hover:underline">
          {t({ en: "Sign up", zh: "注册" })}
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
