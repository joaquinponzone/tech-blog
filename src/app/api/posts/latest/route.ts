import { NextResponse } from 'next/server'

import { query } from '@/db/db'

export async function GET() {
  const { rows: posts } = await query(`SELECT * FROM posts ORDER BY id DESC LIMIT 1`)
  const post = posts[0]

  return NextResponse.json({
    data: post,
    error: null,
  })
}
