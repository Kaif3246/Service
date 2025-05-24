import React from "react";
import bgImage from "../assets/images/buisness.jpg";

const BusinessStrategySection = () => {
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
        <h2 className="text-4xl font-bold text-[#FF0000] mb-8">Business Strategy</h2>
        <ul className="max-w-2xl text-lg list-disc list-inside space-y-4 text-black">
          <li>Custom business model development</li>
          <li>Strategic planning for startup and growth phases</li>
          <li>Competitive SWOT analysis and market positioning</li>
          <li>Revenue model design and scalability planning</li>
          <li>Operational structure and delegation strategy</li>
        </ul>
      </div>
    </div>
  );
};

export default BusinessStrategySection;
