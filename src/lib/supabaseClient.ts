import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kklikcbsvrdbnolmifff.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_ARFp59lc3q4QeDBoE8_c5Q_sehUHoKf';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
