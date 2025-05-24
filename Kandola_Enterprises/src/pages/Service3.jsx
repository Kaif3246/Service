import React from "react";
import bgImage from "../assets/images/capital.jpg"; // Replace with your actual image path

const FundingSection = () => {
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
        <h2 className="text-4xl font-bold text-[#FF0000] mb-8">
          Funding & Capital Optimization
        </h2>
        <ul className="max-w-2xl text-lg list-disc list-inside space-y-4 text-black">
          <li>Personal & business credit analysis</li>
          <li>Fundability audits and pre-lender optimization</li>
          <li>Business funding blueprint (cards, loans, lines of credit)</li>
          <li>Access to direct lender networks and high-limit opportunities</li>
          <li>Capital stack strategy for multi-phase growth</li>
        </ul>
      </div>
    </div>
  );
};

export default FundingSection;
