import React from "react";
import bgImage from "../assets/images/buisness.jpg"; // Replace with your actual background image path

const BusinessStrategySection = () => {
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
      <h2 className="text-4xl font-bold mb-6 text-[#FF0000]">Business Strategy</h2>

      {/* Content */}
      <ul className="max-w-2xl text-lg text-left list-disc list-inside space-y-2  bg-opacity-60 p-6 rounded-md">
        <li>Custom business model development</li>
        <li>Strategic planning for startup and growth phases</li>
        <li>Competitive SWOT analysis and market positioning</li>
        <li>Revenue model design and scalability planning</li>
        <li>Operational structure and delegation strategy</li>
      </ul>
    </div>
  );
};

export default BusinessStrategySection;
