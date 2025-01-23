import { Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const data = [
        { song: "Song1", artist: "Artist1" },
        { song: "Song2", artist: "Artist2" },
        { song: "Song3", artist: "Artist3" },
        { song: "Song4", artist: "Artist4" },
        { song: "Song5", artist: "Artist5" },
    ];

    const filteredResults = data.filter(
        (item) =>
            item.song.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.artist.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0,4);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        setIsOpen(value.length > 0);
    };

    const handleSelect = (item: { song: string; artist: string }) => {
        setSearchQuery(`${item.song} - ${item.artist}`);
        setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <div className="w-full h-12 rounded-lg px-4 shadow-md bg-white/10 flex items-center">
                <Search className="size-6" />
                <input
                    type="text"
                    className="bg-transparent border-none h-full text-sm w-full ml-2 focus:outline-none"
                    placeholder="Search songs or artists..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    onFocus={() => setIsOpen(searchQuery.length > 0)}
                />
            </div>

            {isOpen && (
                <div
                    className="absolute left-0 mt-2 w-full shadow-md bg-black rounded-lg z-50"
                    style={{ top: "100%" }}
                >
                    {filteredResults.length > 0 ? (
                        <ul>
                            {filteredResults.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelect(item)}
                                    className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                                >
                                    <div className="font-medium">{item.song}</div>
                                    <div className="text-sm text-gray-500">{item.artist}</div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="p-4 text-gray-500 text-sm">No results found</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
