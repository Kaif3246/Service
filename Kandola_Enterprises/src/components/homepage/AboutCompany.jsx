import React from "react";
import mainImage from "../../assets/images/about-bg.jpg";
import { FaCheck } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const OurCompany = () => {
  return (
    <section className="relative bg-gray-300 min-h-[95%] flex items-center overflow-hidden pt-32 pb-0 mb-20">
      {/* Top Curve BG */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gray-300 rounded-b-[80px] z-10" />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-center z-20">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative mb-12 lg:mb-0 h-[500px] lg:h-[600px] overflow-hidden">
  <div
    className="w-full min-h-[100%] px-2 bg-cover bg-center"
    style={{
      backgroundImage: `url(${mainImage})`,
      clipPath: "path('M0,0 Q250,80 500,0 L500,600 L0,600 Z')",
    }}
  ></div>
</div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <p className="text-red-500 leading-tight font-semibold mb-2">• Kandola Enterprises •</p>
          <h2 className="text-4xl font-bold mb-2 leading-tight">
          Empowering Growth Through Custom Solutions
          </h2>
          <p className="text-gray-600 tracking-wider mb-0">
          At Kandola Enterprises, we empower individuals and businesses to take control of their financial future through expert guidance and strategic consulting. Our services are designed to strengthen financial foundations, restore confidence, 
          and unlock meaningful opportunities—from home ownership to business growth.
          </p>
          <p className="text-gray-600 tracking-wider mb-0">
          We recognize that financial challenges can create barriers. That’s why our experienced consultants work closely with each client to assess their unique situation, identify key obstacles, 
          and create customized strategies for long-term financial wellness.
          </p>
          <p className="text-gray-600 tracking-wider mb-4">
          Whether you're an entrepreneur aiming to elevate your business or an individual focused on rebuilding financial strength, Kandola Enterprises is your trusted 
          partner—dedicated to helping you move forward with clarity and confidence.
          </p>
        

          {/* Bullet Points + Clients */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-6">
            {/* Feature List */}
            <div className="space-y-3 w-full md:w-1/2 text-left">
              {[
                "Expertise and experience",
                "Client centric approach",
                "Commitment excellences"
              ].map((item, index) => (
                <div key={index} className="flex items-center tracking-wider text-gray-700">
                  <FaCheck className="text-red-500 mr-2" />
                  {item}
                </div>
              ))}
            </div>

            {/* Clients Section */}
            <div className="flex flex-col items-center">
              <div className="flex -space-x-2 mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client 1"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Client 2"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/64.jpg"
                  alt="Client 3"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-semibold border-2 border-white">
                  +
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">3K+</p>
                <p className="text-gray-600 tracking-wider text-sm">Happy clients worldwide</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center lg:text-left">
            <button className="flex items-center tracking-wider mb-10 px-6 py-3 bg-white hover:bg-red-500 hover:text-white text-red-500 font-semibold  shadow-md transition mx-auto lg:mx-0">
              <FiArrowRight className="mr-2" />
              Read more
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Convex Border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10 rotate-180">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.39C177.22,28.36,64.78,4.45,0,0V120H1200V0c-64.78,4.45-177.22,28.36-321.39,56.39C735.25,86.5,612.96,120,600,120S464.75,86.5,321.39,56.39Z"
            fill="#D1D5DB"
          />
        </svg>
      </div>
    </section>
  );
};

export default OurCompany;
