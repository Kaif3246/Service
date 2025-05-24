import React from "react";
import bgImage from "../assets/images/funding.jpg"; // Replace with your actual image path

const MarketingSection = () => {
  return (
    <div className="w-full">
      {/* Background Image Only */}
      <div
        className="h-[50vh] w-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Heading and Content Below Image with Left-to-Right Gradient */}
      <div className="bg-gradient-to-r from-white to-[#A9ABAA] py-12 px-4 flex flex-col items-start text-left">
        <h2 className="text-4xl font-bold text-[#FF0000] mb-8">Marketing</h2>
        <ul className="max-w-2xl text-lg list-disc list-inside space-y-4 text-black">
          <li>Organic & paid lead generation (Google, Meta, YouTube, etc.)</li>
          <li>Sales funnel creation and conversion copywriting</li>
          <li>Content marketing & social media positioning</li>
          <li>Ad campaign development and targeting strategy</li>
          <li>Referral engine & affiliate program integration</li>
        </ul>
      </div>
    </div>
  );
};

export default MarketingSection;
