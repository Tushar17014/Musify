declare type SongProp = {
    title: string;
    artist: string;
    imageURL: string;
    audioURL: string;
    duration: string;
    category: string[];
}

declare type HomeListProps = {
    title: String,
    data: SongProp[]
}