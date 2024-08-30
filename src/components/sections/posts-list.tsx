import PostsGrid from '@/components/posts-grid'
import SubscribeBanner from '@/components/subscribe-banner'
import MostViewedPosts from '@/components/sections/most-viewed'
import LoadMoreButton from '@/components/load-more-button'
import { apiUrl } from '@/lib/site-config'

async function getPosts(limit: number, tags?: string) {
  const postListUrl = `${apiUrl}/posts?limit=${limit}${tags ? `&tags=${tags}` : ''}`
  const response = await fetch(postListUrl, { cache: 'no-store' })
  const { data } = await response.json()
  return { posts: data.posts, totalPosts: data.totalPosts }
}

export default async function PostsList({ limit, tags }: { limit: number; tags?: string }) {
  const { posts, totalPosts } = await getPosts(limit, tags)

  const remainingPosts = posts?.slice(4)
  return (
    <div className="flex gap-12">
      <div className="flex-1 space-y-12">
        {posts?.length > 0 ? (
          <PostsGrid posts={posts.slice(0, 3)} startIndex={1} />
        ) : (
          <div>No posts found</div>
        )}
        <SubscribeBanner />
        {remainingPosts?.length > 0 && (
          <>
            {Array.from({ length: Math.ceil(remainingPosts.length / 3) }).map((_, index) => (
              <PostsGrid
                key={index}
                posts={remainingPosts.slice(index * 3, (index + 1) * 3)}
                startIndex={4 + index * 3}
              />
            ))}
          </>
        )}
        {limit < totalPosts && (
          <div className="flex justify-center">
            <LoadMoreButton />
          </div>
        )}
      </div>
      <div className="hidden lg:block w-1/5">
        <MostViewedPosts />
      </div>
    </div>
  )
}
