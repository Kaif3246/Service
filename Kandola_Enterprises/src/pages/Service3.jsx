import React from "react";
import bgImage from "../assets/images/capital.jpg";// Replace with your actual image path

const FundingSection = () => {
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
      <h2 className="text-4xl font-bold mb-6 text-[#FF0000]">Funding & Capital Optimization</h2>

      {/* Content */}
      <ul className="max-w-2xl text-lg text-left list-disc list-inside space-y-2  bg-opacity-60 p-6 rounded-md">
        <li>Personal & business credit analysis</li>
        <li>Fundability audits and pre-lender optimization</li>
        <li>Business funding blueprint (cards, loans, lines of credit)</li>
        <li>Access to direct lender networks and high-limit opportunities</li>
        <li>Capital stack strategy for multi-phase growth</li>
      </ul>
    </div>
  );
};

export default FundingSection;
