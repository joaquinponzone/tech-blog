import { NextResponse } from 'next/server';
import { query } from '@/db/db';
import { revalidatePath } from 'next/cache';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '3', 10);
    const offset = (page - 1) * limit;
    const tags = searchParams.get('tags')?.split(',') || [];

    let postsList = [];
    if(tags.length > 0) {
        const { rows: posts } = await query(
            `SELECT id FROM posts WHERE LOWER(tag) = ANY(ARRAY(SELECT LOWER(unnest($3::text[])))) ORDER BY id DESC LIMIT $1 OFFSET $2`, // non case sensitive
            // `SELECT * FROM posts WHERE tag = ANY($3::text[]) ORDER BY id DESC LIMIT $1 OFFSET $2`, // case sensitive
            [limit, offset, tags]
        );
        postsList = posts;
    } else {
        const { rows: posts } = await query(
            `SELECT * FROM posts ORDER BY id DESC LIMIT $1 OFFSET $2`,
            [limit, offset]
        );
        postsList = posts.slice(1);
    }

    if (postsList.length === 0) {
      return NextResponse.json({ error: 'No posts found', data: null });
    }

    const totalPosts = await query('SELECT COUNT(*) FROM posts');
    const totalCount = parseInt(totalPosts.rows[0].count, 10);

    revalidatePath('/');

    return NextResponse.json({
        data: {
            posts: postsList,
            currentPage: page,
            totalPages: Math.ceil(totalCount / limit),
            totalPosts: totalCount,
        },
        error: null
    });
}
