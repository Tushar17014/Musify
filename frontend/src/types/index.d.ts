declare type SongProp = {
    title: string;
    artist: string;
    imageURL: string;
    audioURL: string;
    duration: number;
    category: string[];
}

declare type HomeListProps = {
    title: string,
    data: SongProp[]
}

declare type AuthSliceProps = {
    isAdmin: boolean,
    userID: string | null | undefined,
    isLoading: boolean,
    error: string | null
}

declare type PlaylistSidebarCardSkeletonPorps = {
    count: number
}

declare type PlaylistSidebarCardProps = {
    title: string,
    imageURL: string,
    numberOfSongs: number,
    songs?: Array,
}