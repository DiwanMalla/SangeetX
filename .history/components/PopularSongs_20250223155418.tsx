import { Heart, Play } from "lucide-react";
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
    <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-background">
      <h2>Popular Songs</h2>
      <div>
        {popularSongs.map((song) => (
          <div key={song.id}>
            <div>
              <Image
                src={song.cover || "/placeholder.svg"}
                alt={song.title}
                width={80}
                height={80}
                className="rounded-md mr-4"
              />
              <div>
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
            </div>
            <div>
              <button>
                <Play />
              </button>
              <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition duration-300">
                <Heart size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSongs;
