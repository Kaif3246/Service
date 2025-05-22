import React from "react";
import mainImage from "../../assets/images/about-bg.jpg";
import { FaCheck } from "react-icons/fa";
import video from '../../assets/images/about.mp4'

const OurCompany = () => {
  return (
    <>
    <div className="flex justify-center items-center mb-10 h-full text-[#FF0000]" style={{ fontFamily: '"Cabin", sans-serif' }}>
  <h2 className="text-4xl font-bold leading-tight text-[#FF0000] text-center">
    Empowering Growth Through Custom Solutions
  </h2>
</div>
    <div
      className="min-h-screen bg-white flex items-center justify-center  "
      style={{ fontFamily: '"Cabin", sans-serif' }}
    >
      <div className="w-full max-w-5xl bg-white shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Left Side - Video */}
        <div className="relative w-full h-full min-h-[600px]">
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
        <div className="p-8 lg:p-10 flex flex-col justify-between text-black bg-white">

          {/* Title */}
          <p className="text-2xl font-semibold mb-4">Kandola Enterprises, LLC</p>

          {/* Main Content */}
          <div className="font-normal text-[#A9ABAA] space-y-3 mb-6">
            <p>
              At Kandola Enterprises, we empower individuals and businesses to take control of their financial future through expert guidance and strategic consulting.
            </p>
            <p>
              We recognize that financial challenges can create barriers. That’s why our experienced consultants work closely with each client to assess their unique situation, identify key obstacles,
              and create customized strategies for long-term financial wellness.
            </p>
            <p className="tracking-wider">
              Whether you're an entrepreneur aiming to elevate your business or an individual focused on rebuilding financial strength, Kandola Enterprises is your trusted
              partner—dedicated to helping you move forward with clarity and confidence.
            </p>
          </div>

          {/* Bullet Points + Clients */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

            {/* Bullet Points */}
            <div className="space-y-3 w-full md:w-1/2 text-left">
              {[
                "Expertise and experience",
                "Client centric approach",
                "Commitment excellences"
              ].map((item, index) => (
                <div key={index} className="flex items-center tracking-wider text-[#A9ABAA]">
                  <FaCheck className="text-[#FF0000] mr-2" />
                  {item}
                </div>
              ))}
            </div>

            {/* Clients */}
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
                <div className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center text-sm font-semibold border-2 border-white">
                  +
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold">3K+</p>
                <p className="text-[#A9ABAA] tracking-wider text-sm font-normal">Happy clients worldwide</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default OurCompany;
