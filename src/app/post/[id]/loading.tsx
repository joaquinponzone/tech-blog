import { Skeleton } from '@/components/ui/skeleton'
import { ArrowLeftIcon, Clock, FacebookIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function PostPageLoading() {
  return (
    <main className="bg-white text-black">
      <div className="relative h-[45vh] w-full lg:h-[60vh]">
        <Skeleton className="size-full" />
        <div className="button-0 absolute top-48 p-2 lg:bottom-20 lg:p-6 2xl:left-64">
          <div className="mx-4 lg:mx-16 lg:min-w-[400px]">
            <div className="absolute bottom-20 size-full">
              <Link
                href="/"
                className={`flex items-center gap-2 ${buttonVariants({ variant: 'secondary' })}`}
              >
                <ArrowLeftIcon />
              </Link>
            </div>
            <Skeleton className="mb-2 h-6 w-32 bg-white p-4" />
            <Skeleton className="mb-2 h-12 w-full bg-white p-4" />
            <div className="flex w-fit items-center gap-2 bg-white p-2">
              <Clock className="size-3" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto max-w-6xl grow space-y-12 px-4">
        <div className="flex gap-8 py-32">
          <div className="w-full lg:w-2/3">
            <div className="prose prose-lg max-w-none space-y-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-6 w-full" />
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              <div className="rounded-lg bg-gray-100 p-6">
                <Skeleton className="mb-4 h-6 w-32" />
                <div className="flex space-x-4">
                  <Skeleton className="size-6" />
                  <Skeleton className="size-6" />
                </div>
              </div>
              <div className="rounded-lg bg-gray-100 p-6">
                <Skeleton className="mb-4 h-6 w-32" />
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="mb-4 flex items-center space-x-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-12 w-16" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Skeleton className="mb-4 h-8 w-48" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <Skeleton className="h-64 w-full" />
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <Skeleton className="mb-2 h-4 w-16" />
                  <Skeleton className="mb-2 h-6 w-full" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Skeleton className="h-64 w-full" />
      </section>
    </main>
  )
}
