import { ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { Post } from '@/lib/types'
import { apiUrl } from '@/lib/site-config'

async function getLatestPost() {
  const response = await fetch(`${apiUrl}/posts/latest`, { cache: 'no-store' })
  const { data: post } = await response.json()
  return post as Post
}

export default async function HeroSection() {
  const post = await getLatestPost()

  return (
    <section className="mb-12">
      <h2 className="mb-4 hidden text-xl lg:block">Today story</h2>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg lg:aspect-[16/9]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          style={{ objectFit: 'cover' }}
          className="brightness-75"
          priority
        />
        <div className="absolute bottom-0 left-0 m-4 w-full p-6 md:w-2/3 lg:w-1/2">
          <div className="flex w-fit items-center justify-between bg-black p-4">
            <Badge className="bg-primary text-sm text-black">{post.tag}</Badge>
          </div>
          <h1 className="max-w-[90%] bg-black p-4 text-xl font-bold lg:text-3xl">{post.title}</h1>
          <div className="flex max-w-[90%] items-center justify-between bg-black p-3">
            <Link
              href={`/post/${post.id}`}
              className="inline-flex items-center space-x-1 text-sm hover:underline"
            >
              <span>Read</span>
              <ArrowRight className="size-4 text-purple-500" />
            </Link>
            <div className="mt-2 flex items-center space-x-2 text-sm text-gray-400">
              <Clock className="size-4" />
              <span>{post.read_time}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
