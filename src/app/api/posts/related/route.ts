import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { put } from '@vercel/blob'
import { query } from '@/db/db'

export async function GET() {
  const { rows: posts } = await query(`SELECT * FROM posts WHERE tag = $1 LIMIT 3`, ['Related'])

  return NextResponse.json({
    data: posts,
    error: null,
  })
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const title = formData.get('title') as string
    const imageFile = formData.get('image') as File
    const tag = formData.get('tag') as string
    const read_time = formData.get('read_time') as string

    if (!title || !imageFile) {
      return NextResponse.json({ error: 'Title and image are required' }, { status: 400 })
    }

    // Upload the image to Vercel Blob
    const blob = await put(`lite-tech/posts/${Date.now()}-${imageFile.name}`, imageFile, {
      access: 'public',
    })

    // Insert the post into the database with the image URL
    const { rows: posts } = await query(
      `INSERT INTO posts (title, tag, read_time, image) VALUES ($1, $2, $3, $4) RETURNING *`,
      [title, tag, read_time, blob.url]
    )

    revalidatePath('/')
    return NextResponse.json({ error: null, data: posts[0] })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json({ error: 'Failed to create post', data: null }, { status: 500 })
  }
}
