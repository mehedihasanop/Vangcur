// ============================================================
//  Supabase Client Setup — Vangcur Project
// ============================================================

import { createClient } from "@supabase/supabase-js";

// 👇 এখানে আপনার Supabase Project URL পেস্ট করুন
const SUPABASE_URL = "https://gzdujkwjplobonvghyhx.supabase.co/rest/v1/";

// 👇 এখানে আপনার Supabase Public (Publishable) Key পেস্ট করুন
const SUPABASE_PUBLIC_KEY = "sb_publishable_KF1pFUO6N77m216FxBeyTA_vJQ4Rzok";

// ============================================================
//  Supabase Client — এটি export করা হচ্ছে, যেকোনো ফাইলে import করুন
// ============================================================
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
