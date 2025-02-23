import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <Image
        src={"/heroBanner.webp"}
        alt="Music App"
        layout="fill"
        objectFit="cover"
        className="brightness-75 dark:brightness-50"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white dark:text-gray-100 drop-shadow-lg">
          🎶 SangeetX – Your Gateway to Music & Innovation 🚀
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 dark:text-gray-300 drop-shadow-md">
          Explore. Stream. Experience Music Like Never Before!
        </p>
        <Button className="bg-gradient-to-r from-purple-700 to-pink-500 hover:opacity-90 text-white font-bold py-6 px-8 rounded-full text-2xl transition duration-300 shadow-lg">
          Explore Now
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
