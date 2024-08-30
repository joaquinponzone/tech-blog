import { apiUrl } from '@/lib/site-config'
import { Post } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

async function getMostViewedPosts() {
  const mostViewedPosts = await fetch(`${apiUrl}/posts/most-viewed`, { cache: 'no-store' })
  const { data: posts } = await mostViewedPosts.json()
  return posts
}

export default async function MostViewedPosts() {
  const mostViewedPosts = await getMostViewedPosts()

  return (
    <div className="hidden md:block">
      <h1 className="text-2xl font-bold">Most viewed</h1>
      <div className="flex flex-col gap-4">
        {mostViewedPosts?.map((post: Post) => (
          <div
            key={post.id}
            className="flex w-full items-center justify-between gap-4 border-b border-neutral-500 py-4"
          >
            <span className="text-sm text-neutral-500">
              <Link href={`/post/${post.id}`}>{post.title}</Link>
            </span>
            <div className="relative h-16 w-24 overflow-hidden">
              <Link href={`/post/${post.id}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
