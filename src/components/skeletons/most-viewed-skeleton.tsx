import { Skeleton } from "@/components/ui/skeleton"

export default function MostViewedPostsSkeleton() {
    return (
        <div className="hidden md:block">
            <Skeleton className="mb-4 h-8 w-32" />
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className='flex w-full items-center justify-between gap-4 border-b border-neutral-500 py-4'>
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-16 w-24" />
                </div>
            ))}
        </div>
    )
}
