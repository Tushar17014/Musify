import HomeCard from "./homeCard"
import './scrollbar.css'

const HomeList = ({title, data} : HomeListProps) => {
  return (
    <div className="w-[75vw] max-xl:w-[80vw] max-lg:w-[75vw] max-md:w-[85vw]">
        <div className="mb-5">
            <h2 className="font-bold text-3xl">{title}</h2>
        </div>
        <div className="scrollbar-custom flex gap-4 overflow-x-scroll">
            {data.map((item, idx) => (
              <HomeCard cardData={item} key={idx}/>
            ))}
        </div>
    </div>
  )
}

export default HomeList
