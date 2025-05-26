import React from "react";
import bgImage from "../assets/images/branding.png"; // Replace with your actual image path

const BrandBuildingSection = () => {
  return (
    <div className="w-full">
      {/* Background Image Only */}
      <div
  className="h-[70vh]  w-full bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
></div>

      {/* Heading and Content Below Image with Left-to-Right Gradient */}
      <div className="bg-gradient-to-r from-white to-[#A9ABAA] py-12 px-4 flex flex-col items-start text-left">
        <h2 className="text-4xl font-bold text-[#FF0000] mb-6">Brand Building</h2>
        <ul className="max-w-2xl text-lg list-disc list-inside  text-black">
          <li>Visual identity creation (logo, fonts, color palette)</li>
          <li>Brand voice, mission, and story development</li>
          <li>Authority positioning for founders and businesses</li>
          <li>Social proof and trust-building strategies</li>
          <li>Branded asset creation (pitch decks, documents, media kits)</li>
        </ul>
      </div>
    </div>
  );
};

export default BrandBuildingSection;
