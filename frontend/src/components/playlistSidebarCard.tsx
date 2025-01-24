
const PlaylistSidebarCard = ({ title, imageURL, numberOfSongs }: PlaylistSidebarCardProps) => {
    return (
        <>
            <div className="flex gap-2 p-3 hover:bg-white/10 w-52 rounded-lg cursor-pointer active:bg-white/15 max-xl:w-20">
                <img className="size-14 rounded-lg" src={imageURL} alt={title} />
                <div className="flex flex-col max-xl:hidden">
                    <p className="w-32 rounded-full truncate text-sm font-semibold">{title}</p>
                    <p className="w-28 h-[15px] rounded-full text-xs text-white/80">Songs: {numberOfSongs}</p>
                </div>
            </div>
        </>
    )
}

export default PlaylistSidebarCard
