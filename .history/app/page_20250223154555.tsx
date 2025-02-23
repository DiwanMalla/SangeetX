import React from "react";
import HeroBanner from "./HeroBanner";
import MusicCategories from "@/components/MusicCategories";
import PopularSongs from "@/components/PopularSongs";

const page = () => {
  return (
    <div className="pt-[6.5rem]">
      <HeroBanner />
      <MusicCategories />
      <div>
        <PopularSongs />
      </div>
    </div>
  );
};

export default page;
