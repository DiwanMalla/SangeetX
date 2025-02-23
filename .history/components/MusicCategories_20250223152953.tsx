import React from "react";
import { Guitar, Headphones, Mic2, Library, Heart, Disc } from "lucide-react";
import { Button } from "./ui/button";
const MusicCategories = () => {
  const categories = [
    {
      name: "Indie / Alternative",
      icon: <Guitar size={24} />,
    },
    {
      name: "Pop & Romantic",
      icon: <Heart size={24} />,
      songs: ["Sasto Mutu", "Thamana Haat", "Muskurayera"],
    },
    {
      name: "Lok Geet / Folk",
      icon: <Headphones size={24} />,
      songs: ["Galbandi", "Bola Maya", "Jhuma Jhuma Rata"],
    },
    {
      name: "R&B / Soul",
      icon: <Mic2 size={24} />,
      songs: ["Kaha Jau", "Bistarai Bistarai", "Baato"],
    },

    {
      name: "Rock & Band Music",
      icon: <Library size={24} />,
      songs: ["Nischal", "Ma Ra Malai", "Farki Farki"],
    },
    {
      name: "Sad & Heartbreak",
      icon: <Disc size={24} />,
      songs: ["Sahara", "Ekai Chin", "Maya Nalaune Jindagi"],
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Music Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-center">
            <Button className="w-full flex items-center gap-3 text-lg font-semibold bg-gradient-to-r from-pink-400 to-purple-500 text-white py-4 px-6 rounded-lg shadow-md">
              {category.icon}
              {category.name}
            </Button>
          </div>
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default MusicCategories;
