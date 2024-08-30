import mockData from '@/lib/mock-data.json';
import { Post } from '@/lib/types';
import { sql } from '@vercel/postgres';


export async function seed() {
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      tag VARCHAR(100) NOT NULL,
      read_time VARCHAR(50) NOT NULL
    );
  `;

  console.log(`Created "posts" table`);

  const posts: Omit<Post, 'id'>[] = mockData.posts.map(post => ({
    title: post.title,
    image: post.image,
    tag: post.tag,
    read_time: post.read_time
  }));

  const insertedPosts = await Promise.all(
    posts.map(
      (post) => sql`
        INSERT INTO posts (title, image, tag, read_time)
        VALUES (${post.title}, ${post.image}, ${post.tag}, ${post.read_time})
        ON CONFLICT DO NOTHING;
      `
    )
  );

  console.log(`Seeded ${posts.length} posts`);

  return {
    createTable,
    insertedPosts,
  };
}
