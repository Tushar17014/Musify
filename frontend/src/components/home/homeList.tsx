import HomeCard from "./homeCard"

const HomeList = ({title, data} : HomeListProps) => {
  return (
    <div>
        <div className="mb-5">
            <h2 className="font-bold text-3xl">{title}</h2>
        </div>
        <div className="flex gap-5">
            <HomeCard cardData={data[0]}/>
            <HomeCard cardData={data[0]}/>
            <HomeCard cardData={data[0]}/>
            <HomeCard cardData={data[0]}/>
            <HomeCard cardData={data[0]}/>
        </div>
    </div>
  )
}

export default HomeList
