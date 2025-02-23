import Image from "next/image";

const PopularSongs = () => {
  const popularSongs = [
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      cover: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      cover: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      title: "Song 3",
      artist: "Artist 3",
      cover: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      title: "Song 4",
      artist: "Artist 4",
      cover: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      title: "Song 5",
      artist: "Artist 5",
      cover: "/placeholder.svg?height=80&width=80",
    },
  ];
  return (
    <section>
      <h2>Popular Songs</h2>
      <div>
        {popularSongs.map((song) => (
          <div>
            <div>
              <Image
                src={song.cover || "/placeholder.svg"}
                alt={song.title}
                width={80}
                height={80}
                className="rounded-md mr-4"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSongs;
