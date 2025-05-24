import React from "react";
import bgImage from "../assets/images/building.jpg"; // Replace with your actual image path

const BrandBuildingSection = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white px-4 text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6 text-[#FF0000]">Brand Building</h2>

      {/* Content */}
      <ul className="max-w-2xl text-lg text-left list-disc list-inside space-y-2 text-black bg-opacity-60 p-6 rounded-md">
        <li>Visual identity creation (logo, fonts, color palette)</li>
        <li>Brand voice, mission, and story development</li>
        <li>Authority positioning for founders and businesses</li>
        <li>Social proof and trust-building strategies</li>
        <li>Branded asset creation (pitch decks, documents, media kits)</li>
      </ul>
    </div>
  );
};

export default BrandBuildingSection;
