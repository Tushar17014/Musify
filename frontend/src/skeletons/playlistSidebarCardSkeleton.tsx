import { Skeleton } from "@/components/ui/skeleton"

const PlaylistSidebarCardSkeleton = ({count} : PlaylistSidebarCardSkeletonPorps) => {
    return (
        <>
            {Array.from({length: count}).map((_, index) => (
                <div className="flex gap-2" key={index}>
                    <Skeleton className="size-16"/>
                    <div className="flex flex-col gap-2 mt-1">
                        <Skeleton className="w-[100px] h-[15px] rounded-full" />
                        <Skeleton className="w-[40px] h-[15px] rounded-full" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default PlaylistSidebarCardSkeleton
