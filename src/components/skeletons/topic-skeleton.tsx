import { Skeleton } from "@/components/ui/skeleton"

export default function TopicsFilterSkeleton() {
    return (
        <div className="w-full bg-black p-4">
            <div className="flex items-center space-x-4 overflow-x-auto pb-2">
                <div className="flex gap-2">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={index} className="h-8 w-36 rounded-full" />
                    ))}
                </div>
            </div>
        </div>
    )
}
