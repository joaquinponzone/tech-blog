import { Skeleton } from "@/components/ui/skeleton"

export default function PostsGridSkeleton({ count = 3 }: { count?: number }) {
    return (
        <section className="mb-12 grid h-[600px] grid-cols-1 gap-6 md:grid-cols-2">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className={`relative ${index === 0 ? 'col-span-1 row-span-2' : 'col-span-1'} overflow-hidden rounded-lg`}>
                    <Skeleton className="size-full" />
                    <div className="absolute bottom-0 left-0 m-3 w-fit min-w-[300px]">
                        <Skeleton className="mb-2 h-6 w-16" />
                        <Skeleton className="mb-2 h-8 w-full" />
                        <div className="flex items-center justify-between">
                            <Skeleton className="h-6 w-20" />
                            <Skeleton className="h-6 w-24" />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}
