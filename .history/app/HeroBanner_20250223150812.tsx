import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 ">
          🎶 SangeetX – Your Gateway to Music & Innovation 🚀
        </h1>
        <p className="text-xl md:text-2xl mb-8 ">
          Explore. Stream. Experience Music Like Never Before!
        </p>
        <Button className="bg-gradient-to-r from-purple-700  to-pink-900 hover:bg-blue-700 text-foreground font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Explore
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
