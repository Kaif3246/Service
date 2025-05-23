import React from "react";
import mainImage from "../../assets/images/about-bg.jpg";
import video from "../../assets/images/about.mp4";

const OurCompany = () => {
  return (
    <>
      {/* Heading */}
      <div
        className="flex justify-center items-center mb-10 px-4 text-[#FF0000]"
        style={{ fontFamily: '"Cabin", sans-serif' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center">
          Empowering Growth Through Custom Solutions
        </h2>
      </div>

      {/* Container */}
      <div
        className="bg-white flex items-center justify-center py-10 px-4"
        style={{ fontFamily: '"Cabin", sans-serif' }}
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
          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center text-black bg-white">
            <p className="text-xl md:text-2xl font-semibold mb-4 md:-mt-25">
              Kandola Enterprises, LLC
            </p>

            <div className="text-[#A9ABAA] space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                At Kandola Enterprises, we empower individuals and businesses to
                take control of their financial future through expert guidance
                and strategic consulting.
              </p>
              <p>
                We recognize that financial challenges can create barriers.
                That’s why our experienced consultants work closely with each
                client to assess their unique situation, identify key obstacles,
                and create customized strategies for long-term financial
                wellness.
              </p>
              <p>
                Whether you're an entrepreneur aiming to elevate your business
                or an individual focused on rebuilding financial strength,
                Kandola Enterprises is your trusted partner—dedicated to helping
                you move forward with clarity and confidence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default OurCompany;
