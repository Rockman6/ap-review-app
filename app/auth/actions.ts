"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function signUp(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const displayName = String(formData.get("display_name") ?? "").trim();

  if (!email || !password) return { error: "Email and password are required." };
  if (password.length < 6) return { error: "Password must be at least 6 characters." };

  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { display_name: displayName || null } },
  });
  if (error) return { error: error.message };

  revalidatePath("/", "layout");
  redirect("/account");
}

export async function logIn(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };

  revalidatePath("/", "layout");
  redirect("/account");
}

export async function logOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}

export async function createClassAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  if (!name) return { error: "Class name is required." };

  const supabase = await createClient();
  const { data, error } = await supabase.rpc("create_class", { _name: name });
  if (error) return { error: error.message };

  revalidatePath("/account");
  return { data };
}

export async function joinClassAction(formData: FormData) {
  const code = String(formData.get("code") ?? "").trim();
  if (!code) return { error: "Join code is required." };

  const supabase = await createClient();
  const { data, error } = await supabase.rpc("join_class_by_code", { _code: code });
  if (error) {
    if (error.message.includes("invalid_join_code")) return { error: "That code doesn't match any class." };
    return { error: error.message };
  }

  revalidatePath("/account");
  return { data };
}
