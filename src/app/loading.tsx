import HeroSkeleton from '@/components/skeletons/hero-skeleton'

import SubscribeBanner from '@/components/subscribe-banner'

import Footer from '@/components/sections/footer'
import PostsGridSkeleton from '@/components/skeletons/post-grid-skeleton'
import MostViewedPostsSkeleton from '@/components/skeletons/most-viewed-skeleton'

export default function Loading() {
  return (
    <main className="container mx-auto max-w-7xl grow space-y-12 px-4">
      <HeroSkeleton />
      <div className="flex gap-12">
        <div className="flex-1 space-y-12">
          <PostsGridSkeleton count={3} />
          <SubscribeBanner />
          <PostsGridSkeleton count={6} />
          <div className="flex justify-center">
            <div className="h-10 w-32 animate-pulse rounded-md bg-gray-300" />
          </div>
        </div>
        <div className="w-1/5">
          <MostViewedPostsSkeleton />
        </div>
      </div>
      <Footer />
    </main>
  )
}
