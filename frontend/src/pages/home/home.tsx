import HomeList from "@/components/home/homeList"

const data = [
  {
    title: "Brown Munde",
    artist: "AP Dhillon",
    imageURL: "/brown_munde.png",
    audioURL: "123",
    duration: 30,
    category: ["Bass", "New"],
  },
  {
    title: "Brown Munde",
    artist: "AP Dhillon",
    imageURL: "/brown_munde.png",
    audioURL: "123",
    duration: 30,
    category: ["Bass", "New"],
  },
  {
    title: "Brown Munde",
    artist: "AP Dhillon",
    imageURL: "/brown_munde.png",
    audioURL: "123",
    duration: 30,
    category: ["Bass", "New"],
  },
  {
    title: "Brown Munde",
    artist: "AP Dhillon",
    imageURL: "/brown_munde.png",
    audioURL: "123",
    duration: 30,
    category: ["Bass", "New"],
  },
  {
    title: "Brown Munde",
    artist: "AP Dhillon",
    imageURL: "/brown_munde.png",
    audioURL: "123",
    duration: 30,
    category: ["Bass", "New"],
  },
  {
    title: "Brown Munde",
    artist: "AP Dhillon",
    imageURL: "/brown_munde.png",
    audioURL: "123",
    duration: 30,
    category: ["Bass", "New"],
  },
]
function Home() {
  return (
    <div className="flex flex-col p-10 gap-6">
      <HomeList title={"Top Songs"} data={data} />
      <HomeList title={"Top Songs"} data={data} />
    </div>
  )
}

export default Home
