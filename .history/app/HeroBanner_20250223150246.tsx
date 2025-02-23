import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="">
      <div className="absolute">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          🎶 SangeetX – Your Gateway to Music & Innovation 🚀
        </h1>
        <p>Explore. Stream. Experience Music Like Never Before!</p>
        <Button>Explore</Button>
      </div>
    </div>
  );
};

export default HeroBanner;
