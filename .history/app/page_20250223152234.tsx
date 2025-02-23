import React from "react";
import HeroBanner from "./HeroBanner";
import MusicCategories from "@/components/MusicCategories";

const page = () => {
  return (
    <div className="pt-[6.5rem]">
      <HeroBanner />
      <MusicCategories />
    </div>
  );
};

export default page;
