import React from "react";
import bgImage from "../assets/images/buisness.jpg";

const BusinessStrategySection = () => {
  return (
    <div className="w-full">
      {/* Top 50% section with background image */}
      <div
        className="h-[50vh] flex justify-center items-center text-white text-center px-4"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-4xl font-bold text-[#FF0000]">Business Strategy</h2>
      </div>

      {/* Bottom 50% section with white background and content */}
      <div className="bg-white py-12 px-4 flex justify-center items-center">
        <ul className="max-w-2xl text-lg text-left list-disc list-inside space-y-4 text-black">
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
