import Footer from '@/components/sections/footer'
import { apiUrl } from '@/lib/site-config'
import Image from 'next/image'
import { ArrowLeftIcon, Clock, FacebookIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import MostViewedPosts from '@/components/sections/most-viewed'
import { buttonVariants } from '@/components/ui/button'
import RelatedPosts from '@/components/sections/related-posts'

export default async function PostPage({ params }: { params: { id: string } }) {
  const response = await fetch(`${apiUrl}/post/${params.id}`, { cache: 'no-store' })
  const { data: post } = await response.json()

  return (
    <main className="bg-white text-black">
      <div className="relative h-[45vh] w-full lg:h-[60vh]">
        <Image
          src={post.image}
          alt={post.title || 'Post cover image'}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="button-0 absolute top-48 p-2 lg:bottom-20 lg:p-6 2xl:left-64">
          <div className="mx-4 lg:mx-16 lg:min-w-[400px]">
            <div className="absolute bottom-20 size-full">
              <Link
                href="/"
                className={`flex items-center gap-2 ${buttonVariants({ variant: 'secondary' })}`}
              >
                <ArrowLeftIcon /> Blog
              </Link>
            </div>
            <span className="bg-white p-4 text-base text-black">By Marvin Kale</span>
            <h1 className="bg-white p-4 text-2xl font-bold text-black lg:text-4xl">{post.title}</h1>
            <div className="flex w-fit items-center gap-2 bg-white p-2 text-xs">
              <Clock className="size-3" />
              <span>{post.read_time}</span>
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto max-w-6xl grow space-y-12 px-4">
        <div className="flex gap-8 py-32">
          <div className="w-full lg:w-2/3">
            <div className="prose prose-lg max-w-none">
              {/* Add your post content here */}
              <p>
                Curabatur sit amet sapien et velit fringilla tincidunt porttitor eget lectus. Sed
                magna libero, malesuada ut velit vitae, porta ac enim.
              </p>
              <p>
                Curabatur sit amet sapien et velit fringilla tincidunt porttitor eget lectus. Sed
                magna libero, malesuada ut velit vitae, porta ac enim. Curabatur sit amet sapien et
                velit fringilla tincidunt porttitor eget lectus. Sed magna libero, malesuada ut
                velit vitae, porta ac enim.
              </p>
              <Image
                src={post.image}
                alt="Post content image"
                width={400}
                height={600}
                className="my-8"
              />
              <p>Pellentesque venenatis arcu lectus, quis</p>
              <p>
                Curabatur sit amet sapien et velit fringilla tincidunt porttitor eget lectus. Sed
                magna libero, malesuada ut velit vitae, porta ac enim. Curabatur sit amet sapien et
                velit fringilla tincidunt porttitor eget lectus. Sed magna libero, malesuada ut
                velit vitae, porta ac enim.
              </p>
              <h2>Commodo eget vel, in velit nam, laoreet eleifend</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed ante in nunc
                porttitor aliquet. Sed magna libero, malesuada ut velit vitae, porta ac enim.
              </p>
              <h2>Nullam tristique tellus porta</h2>
              <p>
                Maecenas quis ex libero. Sed magna libero, malesuada ut velit vitae, porta ac enim.
                Curabatur sit amet sapien et velit fringilla tincidunt porttitor eget lectus. Sed
                magna libero, malesuada ut velit vitae, porta ac enim.
              </p>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              <div className="rounded-lg bg-gray-100 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">Share on</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-600 hover:text-blue-500">
                    <FacebookIcon size={24} />
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-blue-400">
                    <TwitterIcon size={24} />
                  </Link>
                </div>
              </div>
              <div className="rounded-lg bg-gray-100 p-6">
                <MostViewedPosts />
              </div>
            </div>
          </div>
        </div>
        <RelatedPosts />
        <Footer />
      </section>
    </main>
  )
}
