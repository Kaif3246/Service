import React from "react";
import bgImage from "../assets/images/digital.jpg"; // Adjust the path accordingly

const DigitalArchitectureSection = () => {
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
        <h2 className="text-4xl font-bold text-[#FF0000] mb-8">Digital Architecture</h2>
        <ul className="max-w-2xl text-lg list-disc list-inside space-y-4 text-black">
          <li>Website design, SEO, and funnel integration</li>
          <li>CRM, email, and client intake system setup</li>
          <li>Digital onboarding & automation workflows</li>
          <li>Google Business & reputation management</li>
          <li>Scalable backend for remote client delivery</li>
        </ul>
      </div>
    </div>
  );
};

export default DigitalArchitectureSection;
