import HeroSection from '@/components/sections/hero'
import Footer from '@/components/sections/footer'
import PostsList from '@/components/sections/posts-list'
import Topics from '@/components/sections/topics'


export default async function HomePage({
  searchParams,
}: {
  searchParams?: {
    limit?: string
    tags?: string
  }
}) {
  const limit = Number(searchParams?.limit) || 8
  const tags = searchParams?.tags

  return (
    <main className="container mx-auto max-w-7xl grow space-y-12 px-4">
      <HeroSection />
      <Topics />
      <PostsList limit={limit} tags={tags}/>
      <Footer />
    </main>
  )
}
