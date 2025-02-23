"use client";
import { Heart, Pause, Play } from "lucide-react";
import Image from "next/image";

import { useState, useRef } from "react";
const PopularSongs = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const popularSongs = [
    {
      id: 1,
      title: "Suna Kanchi",
      artist: "Sajjan Raj Vaidya",
      src: "/Suna-Kanchi.mp3",
      cover: "https://i.ytimg.com/vi/6rrgwFM9hZg/maxresdefault.jpg", // Manually assigned album cover
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      src: "/song2.mp3",
      cover: "/song2.jpg",
    },
    {
      id: 3,
      title: "Song 3",
      artist: "Artist 3",
      src: "/song3.mp3",
      cover: "/song3.jpg",
    },
  ];
  const playSong = (index: number) => {
    if (currentSongIndex === index && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(popularSongs[index].src);
      audioRef.current.play();
      setCurrentSongIndex(index);
      setIsPlaying(true);
      audioRef.current.onended = () => setIsPlaying(false);
    }
  };

  const nextSong = () => {
    if (currentSongIndex !== null) {
      const nextIndex = (currentSongIndex + 1) % popularSongs.length;
      playSong(nextIndex);
    }
  };

  const prevSong = () => {
    if (currentSongIndex !== null) {
      const prevIndex =
        (currentSongIndex - 1 + popularSongs.length) % popularSongs.length;
      playSong(prevIndex);
    }
  };
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800 bg-opacity-50 ">
      <h2 className="text-3xl font-bold mb-8 text-center">Popular Songs</h2>
      <div className="max-w-3xl font-bold mb-8 text-center">
        {popularSongs.map((song, index) => (
          <div
            key={song.id}
            className="flex items-center justify-between p-4 mb-4 bg-white dark:bg-gray-700 bg-opacity-50 rounded-lg hover:bg-blue-300 dark:bg-hover:700 transition duration-300"
          >
            <div className="flex items-center">
              <Image
                src={song.cover || "/placeholder.svg"}
                alt={song.title}
                width={80}
                height={80}
                className="rounded-md mr-4"
              />
              <div>
                <h3 className="font-semibold text-sm">{song.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {song.artist}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => playSong(index)}
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
              >
                {currentSongIndex === index && isPlaying ? (
                  <Pause size={20} />
                ) : (
                  <Play size={20} />
                )}
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
