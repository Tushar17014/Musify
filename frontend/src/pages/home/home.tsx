import HomeList from "@/components/home/homeList"

function Home() {
  const data = [
    {
      title: "Brown Munde",
      artist: "AP Dhillon",
      imageURL: "/brown_munde.png",
      audioURL: "123",
      duration: "3:10",
      category: ["Bass", "New"],
    },
    {
      title: "Brown Munde",
      artist: "AP Dhillon",
      imageURL: "/brown_munde.png",
      audioURL: "123",
      duration: "3:10",
      category: ["Bass", "New"],
    },
    {
      title: "Brown Munde",
      artist: "AP Dhillon",
      imageURL: "/brown_munde.png",
      audioURL: "123",
      duration: "3:10",
      category: ["Bass", "New"],
    },
    {
      title: "Brown Munde",
      artist: "AP Dhillon",
      imageURL: "/brown_munde.png",
      audioURL: "123",
      duration: "3:10",
      category: ["Bass", "New"],
    },
    {
      title: "Brown Munde",
      artist: "AP Dhillon",
      imageURL: "/brown_munde.png",
      audioURL: "123",
      duration: "3:10",
      category: ["Bass", "New"],
    },
  ]
  return (
    <div className="p-10">
      <HomeList title={"Top Songs"} data={data} />
    </div>
  )
}

export default Home
