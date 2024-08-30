import { NextResponse } from 'next/server'

import { query } from '@/db/db'

export async function GET() {
  // TODO: implement a view count column in the database
  // in the meantime, just return the first 5 posts
  const { rows: posts } = await query(`SELECT id, title, image FROM posts LIMIT 5`)

  return NextResponse.json({
    data: posts,
    error: null,
  })
}
