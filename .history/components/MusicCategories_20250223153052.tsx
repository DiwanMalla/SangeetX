import React from "react";
import { Guitar, Headphones, Mic2, Library, Heart, Disc } from "lucide-react";
import { Button } from "./ui/button";
const MusicCategories = () => {
  const categories = [
    {
      name: "Indie / Alternative",
      icon: <Guitar size={28} className="text-pink-500 drop-shadow-lg" />,
    },
    {
      name: "Pop & Romantic",
      icon: <Heart size={28} className="text-red-500 drop-shadow-lg" />,
    },
    {
      name: "Lok Geet / Folk",
      icon: <Headphones size={28} className="text-blue-500 drop-shadow-lg" />,
    },
    {
      name: "R&B / Soul",
      icon: <Mic2 size={28} className="text-purple-500 drop-shadow-lg" />,
    },
    {
      name: "Rock & Band Music",
      icon: <Library size={28} className="text-green-500 drop-shadow-lg" />,
    },
    {
      name: "Sad & Heartbreak",
      icon: <Disc size={28} className="text-gray-500 drop-shadow-lg" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Music Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-center">
            <Button className="w-full flex items-center gap-3 text-lg font-semibold bg-gradient-to-r from-pink-400 to-purple-500 text-white py-4 px-6 rounded-lg shadow-md hover:scale-105 transition-transform">
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
