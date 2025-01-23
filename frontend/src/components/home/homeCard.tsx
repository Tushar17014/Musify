import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons";

type HomeCardProps = {
    cardData: SongProp;
};

const HomeCard: React.FC<HomeCardProps> = ({ cardData }) => {
    return (
        <div className="cursor-pointer p-4 group">
            <div className="flex flex-col">
                <div className="relative">
                    <img
                        src={cardData.imageURL}
                        className="size-44 mb-3"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                        <FontAwesomeIcon icon={faPlay} className="size-8"/>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <h3 className="font-semibold text-lg">{cardData.title}</h3>
                    <p className="text-xs text-gray-400">{cardData.duration}</p>
                </div>
                <p className="text-sm text-gray-400 font-semibold">{cardData.artist}</p>
            </div>
        </div>
    );
};

export default HomeCard;
