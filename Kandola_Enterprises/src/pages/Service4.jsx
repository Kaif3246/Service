import React from "react";
import bgImage from "../assets/images/funding.jpg"; // Replace with your actual image path

const MarketingSection = () => {
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
      <h2 className="text-4xl font-bold mb-6 text-[#FF0000]">Marketing</h2>

      {/* Content */}
      <ul className="max-w-2xl text-lg text-left list-disc list-inside space-y-2  bg-opacity-60 p-6 rounded-md">
        <li>Organic & paid lead generation (Google, Meta, YouTube, etc.)</li>
        <li>Sales funnel creation and conversion copywriting</li>
        <li>Content marketing & social media positioning</li>
        <li>Ad campaign development and targeting strategy</li>
        <li>Referral engine & affiliate program integration</li>
      </ul>
    </div>
  );
};

export default MarketingSection;
