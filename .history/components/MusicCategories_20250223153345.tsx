import React from "react";
import { Guitar, Headphones, Mic2, Library, Heart, Disc } from "lucide-react";
import { Button } from "./ui/button";
const MusicCategories = () => {
  const categories = [
    {
      name: "Indie / Alternative",
      icon: <Guitar size={24} />,
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      name: "Pop & Romantic",
      icon: <Heart size={24} />,
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      name: "Lok Geet / Folk",
      icon: <Headphones size={24} />,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      name: "R&B / Soul",
      icon: <Mic2 size={24} />,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      name: "Rock & Band Music",
      icon: <Library size={24} />,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      name: "Sad & Heartbreak",
      icon: <Disc size={24} />,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Music Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-center">
            <Button className="w-full flex items-center gap-3 text-lg font-semibold bg-gradient-to-r from-pink-400 to-purple-500 text-white py-4 px-6 rounded-lg shadow-md hover:scale-105 transition-transform">
              <div
                className={`w-12 h-12 flex items-center ${category.bgColor}`}
              >
                <span className={`${category.iconColor}`}>{category.icon}</span>
              </div>
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
