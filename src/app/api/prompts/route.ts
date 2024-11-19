import { NextResponse } from 'next/server'

import { createClient } from '@/lib/supabase/server'


export async function GET() {
  const supabase = await createClient()
  const { data, error } = await supabase.from('prompts').select('*')
  return NextResponse.json(data)
}

// POST /api/prompts
export async function POST(request: Request) {
  const supabase = await createClient()
  const { data, error } = await supabase.from('prompts').insert(request.body)
  return NextResponse.json(data)
}
