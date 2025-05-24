import React from "react";
import mainImage from "../../assets/images/about-bg.jpg";
import video from "../../assets/images/about.mp4";

const OurCompany = () => {
  return (
    <>
      {/* Heading */}
      <div
        className="flex justify-center items-center mb-10 px-4 text-[#FF0000]"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center">
          Empowering Growth Through Custom Solutions
        </h2>
      </div>

      {/* Container */}
      <div
        className="bg-white flex items-center justify-center py-10 px-4"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <div className="w-full max-w-5xl bg-white shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

          {/* Left Side - Video */}
          <div className="relative w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster={mainImage}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Side - Content */}
          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center text-black bg-white" style={{ fontFamily: '"Poppins", sans-serif' }}>
            <p className="text-xl md:text-2xl font-semibold mb-4 md:-mt-25">
              Kandola Enterprises, LLC
            </p>

            <div className="text-[#A9ABAA] space-y-4 text-sm md:text-base leading-relaxed" style={{ fontFamily: '"Poppins", sans-serif' }}>
              <p>
              Kandola Enterprises is for builders — the founders, 
              entrepreneurs, and visionaries turning ambition into action.
               We specialize in what most overlook: the infrastructure behind the success.
                Our consulting framework is designed to shape businesses 
              that don’t just survive—but scale with precision, purpose, and profit.
              </p>
              <p>
              We work closely with each client to identify where their business is,
               where it’s capable of going, and 
               what needs to be built to bridge that gap
              </p>
              <p>
              From high-level strategy to revenue-generating systems, 
              we bring together every element required to transform potential into performance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default OurCompany;
