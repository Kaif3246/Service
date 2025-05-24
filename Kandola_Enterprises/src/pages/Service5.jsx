import React from "react";
import bgImage from "../assets/images/digital.jpg" // Adjust the path accordingly

const DigitalArchitectureSection = () => {
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
      <h2 className="text-4xl font-bold mb-6 text-[#FF0000]">Digital Architecture</h2>

      {/* Content */}
      <ul className="max-w-2xl text-lg text-left list-disc list-inside space-y-2 text-black bg-opacity-60 p-6 rounded-md">
        <li>Website design, SEO, and funnel integration</li>
        <li>CRM, email, and client intake system setup</li>
        <li>Digital onboarding & automation workflows</li>
        <li>Google Business & reputation management</li>
        <li>Scalable backend for remote client delivery</li>
      </ul>
    </div>
  );
};

export default DigitalArchitectureSection;
