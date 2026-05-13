// ============================================================
//  Supabase Client Setup — Vangcur Project
// ============================================================

import { createClient } from "@supabase/supabase-js";

// 👇 এখানে আপনার Supabase Project URL পেস্ট করুন
const SUPABASE_URL = "https://gzdujkwjplobonvghyhx.supabase.co/rest/v1/";

// 👇 এখানে আপনার Supabase Public (Publishable) Key পেস্ট করুন
const SUPABASE_PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6ZHVqa3dqcGxvYm9udmdoeWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1NzQzODUsImV4cCI6MjA5NDE1MDM4NX0.evLb7_gv5vtFrpsyCeX3h6mLxqCuOXQuY-w9ygvDqak";

// ============================================================
//  Supabase Client — এটি export করা হচ্ছে, যেকোনো ফাইলে import করুন
// ============================================================
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
