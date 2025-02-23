"use client";
import { Heart, Play, Pause } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const PopularSongs = () => {
  const [currentSong, setCurrentSong] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const popularSongs = [
    {
      id: 1,
      title: "Suna Kanchi",
      artist: "Sajjan Raj Vaidya",
      cover: "/placeholder.svg",
      src: "/songs/suna-kanchi.mp3",
    },
    {
      id: 2,
      title: "Naganya Maya",
      artist: "Sajjan Raj Vaidya",
      cover: "/placeholder.svg",
      src: "/songs/naganya-maya.mp3",
    },
    {
      id: 3,
      title: "Sasto Mutu",
      artist: "Sajjan Raj Vaidya",
      cover: "/placeholder.svg",
      src: "/songs/sasto-mutu.mp3",
    },
  ];

  const togglePlay = (id: number, src: string) => {
    if (currentSong === id) {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(src);
      audioRef.current.play();
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current?.currentTime || 0);
        setDuration(audioRef.current?.duration || 0);
      };
      audioRef.current.onended = () => setCurrentSong(null);
      setCurrentSong(id);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800 bg-opacity-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Popular Songs</h2>
      <div className="max-w-3xl mx-auto">
        {popularSongs.map((song) => (
          <div
            key={song.id}
            className="flex items-center justify-between p-4 mb-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:bg-blue-300 dark:hover:bg-gray-600 transition duration-300"
          >
            <div className="flex items-center">
              <Image
                src={song.cover}
                alt={song.title}
                width={80}
                height={80}
                className="rounded-md mr-4"
              />
              <div>
                <h3 className="font-semibold text-lg">{song.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {song.artist}
                </p>
                {currentSong === song.id && (
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </p>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => togglePlay(song.id, song.src)}
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
              >
                {currentSong === song.id && audioRef.current?.paused ? (
                  <Play size={20} />
                ) : currentSong === song.id ? (
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
