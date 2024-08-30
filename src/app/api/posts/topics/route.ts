import { Post } from "@/lib/types";
import { query } from "@/db/db";

import { NextResponse } from "next/server";

export async function GET() {
    const { rows: posts } = await query(
        `SELECT * FROM posts ORDER BY id DESC`,
    );

    const topics = Array.from(new Set(posts?.map((post: Post) => post.tag)))
        .map(tag => ({ label: tag, value: tag }));

    return NextResponse.json({ error: null, data: topics })
}
