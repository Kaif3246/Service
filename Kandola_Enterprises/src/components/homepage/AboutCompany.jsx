import React from "react";
import mainImage from "../../assets/images/hero-bg.jpg";
import smallImage from "../../assets/images/hero-bg.jpg";
import { FaCheck } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const OurCompany = () => {
  return (
    <section className="relative bg-[#fad1d0] pt-32 pb-20 overflow-hidden">
      {/* Circle Image on Top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-36 h-36 md:w-40 md:h-40 rounded-b-full border-8 border-white border-t-0 shadow-xl overflow-hidden bg-white">
          <img
            src={smallImage}
            alt="Team"
            className="w-full h-full object-cover rounded-b-full"
          />
        </div>
      </div>

      {/* Top Curve BG */}
      <div className="absolute top-0 left-0 w-full h-32 bg-[#fad1d0] rounded-b-[80px] z-10" />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-20 flex flex-col lg:flex-row items-center z-0">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative mb-12 lg:mb-0">
          <img
            src={mainImage}
            alt="Meeting"
            className="rounded-bl-[120px] rounded-tl-[60px] rounded-br-[80px] object-cover w-full max-h-[400px] shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <p className="text-red-500 font-semibold mb-2">• OUR COMPANY •</p>
          <h2 className="text-6xl font-bold mb-4 leading-snug">
            Crafting success tailored solution for each & every challenges
          </h2>
          <p className="text-gray-600 mb-6">
            Our mission is to empower businesses of all size to thrive in an
            ever-changing marketplace. We are committed to delivering exceptional
            value through strategic insight and innovative approaches.
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
                <div key={index} className="flex items-center text-gray-700">
                  <FaCheck className="text-red-500 mr-2" />
                  {item}
                </div>
              ))}
            </div>

          {/* Clients Section (Stacked below everything) */}
<div className="flex flex-col items-center mb-8">
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
    <p className="text-gray-600 text-sm">Happy clients worldwide</p>
  </div>
</div>

          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="flex items-center px-6 py-3 bg-white hover:bg-red-500 hover:text-white text-red-500 font-semibold rounded-full shadow-md transition mx-auto">
              <FiArrowRight className="mr-2" />
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
