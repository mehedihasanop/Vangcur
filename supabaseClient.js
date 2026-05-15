// ============================================================
//  Supabase Client Setup — Vangcur Project
// ============================================================

import { createClient } from "@supabase/supabase-js";

// ✅ Supabase Project URL — /rest/v1/ বাদ দেওয়া হয়েছে
const SUPABASE_URL = "https://gzdujkwjplobonvghyhx.supabase.co";

// ✅ Supabase Anon Public Key — সঠিক JWT key
const SUPABASE_PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6ZHVqa3dqcGxvYm9udmdoeWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1NzQzODUsImV4cCI6MjA5NDE1MDM4NX0.evLb7_gv5vtFrpsyCeX3h6mLxqCuOXQuY-w9ygvDqak";

// ============================================================
//  Supabase Client — এটি export করা হচ্ছে, যেকোনো ফাইলে import করুন
// ============================================================
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);

// ============================================================
//  Google OAuth — Sign In with Google
// ============================================================

/**
 * Google দিয়ে লগইন করুন।
 * Supabase Google OAuth redirect ব্যবহার করে।
 * লগইন সফল হলে user কে redirectTo URL-এ ফেরত পাঠাবে।
 *
 * @param {string} redirectTo - লগইনের পরে কোথায় যাবে (default: current page)
 */
export async function signInWithGoogle(redirectTo = window.location.href) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: redirectTo,
    },
  });

  if (error) {
    console.error("Google OAuth Error:", error.message);
    throw error;
  }

  return data;
}

/**
 * Supabase Auth session থেকে বর্তমান user নিন।
 * Page reload বা OAuth callback-এর পরে ব্যবহার করুন।
 */
export async function getCurrentSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("Session Error:", error.message);
    return null;
  }
  return data.session;
}
