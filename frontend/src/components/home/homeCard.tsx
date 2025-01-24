import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons";

type HomeCardProps = {
    cardData: SongProp;
};

const HomeCard: React.FC<HomeCardProps> = ({ cardData }) => {
    return (
        <div className="cursor-pointer p-4 group min-w-[200px] max-xl:min-w-[150px] max-lg:min-w-[120px] max-md:min-w-[100px]">
            <div className="flex flex-col">
                <div className="relative">
                    <img
                        src={cardData.imageURL}
                        className="w-[160px] h-[160px] max-xl:min-w-[120px] max-xl:h-[120px] max-lg:min-w-[110px] max-lg:h-[110px] max-md:min-w-[90px] max-md:h-[90px] mb-3 rounded-lg"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                        <FontAwesomeIcon icon={faPlay} className="size-8"/>
                    </div>
                </div>
                    <h3 className="font-semibold text-lg truncate max-xl:text-[16px] max-lg:text-[14px] max-md:text-[12px]">{cardData.title}</h3>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-gray-400 font-semibold max-xl:text-[12px] max-lg:text-[11px] max-md:text-[10px]">{cardData.artist}</p>
                    <p className="text-xs text-gray-400 max-xl:text-[10px] max-lg:text-[9px] max-md:text-[8px]">0:{cardData.duration}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
