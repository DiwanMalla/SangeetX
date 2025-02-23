import React from "react";
import HeroBanner from "../components/HeroBanner";
import MusicCategories from "@/components/MusicCategories";
import PopularSongs from "@/components/PopularSongs";

const page = () => {
  return (
    <div>
      <HeroBanner />
      <MusicCategories />
      <div>
        <PopularSongs />
      </div>
    </div>
  );
};

export default page;
