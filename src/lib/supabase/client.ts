import { createClient as createSupabaseClient } from '@supabase/supabase-js'

function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  console.log(supabaseUrl, supabaseAnonKey);
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL or Anon Key is not set in environment variables');
  }

  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = createClient()