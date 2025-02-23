import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative h-screen">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Music concert"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          Discover Music
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white">
          Explore new sounds and your favorite artists
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Explore Now
        </button>
      </div>
    </div>
  );
}
