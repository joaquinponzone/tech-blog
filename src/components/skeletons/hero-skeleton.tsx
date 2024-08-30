import { Skeleton } from '@/components/ui/skeleton'

export default function HeroSkeleton() {
  return (
    <section className="mb-12">
      <Skeleton className="mb-4 h-6 w-32" />
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <Skeleton className="size-full" />
        <div className="absolute bottom-0 left-0 m-4 w-full p-6 md:w-2/3 lg:w-1/2">
          <Skeleton className="mb-2 h-8 w-24" />
          <Skeleton className="mb-2 h-12 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      </div>
    </section>
  )
}
