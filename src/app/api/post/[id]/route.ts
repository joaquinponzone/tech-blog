import { Post } from '@/lib/types'
import { query } from '@/db/db'
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const postId = params.id
  const { rows: data } = await query(`SELECT * FROM posts WHERE id = $1`, [postId])
  if (data.length === 0) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }
  return NextResponse.json({ data: data[0] as Post })
}
