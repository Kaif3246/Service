import React from "react";
import mainImage from "../../assets/images/about-bg.jpg";
import { FaCheck } from "react-icons/fa";
import video from '../../assets/images/about.mp4'

const OurCompany = () => {
  return (
    <>

<div className="flex justify-center items-center h-full text-[#FF0000]" style={{ fontFamily: '"Cabin", sans-serif' }}>
  <h2 className="text-4xl font-bold leading-tight text-center">
    Empowering Growth Through Custom Solutions
  </h2>
</div>

    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-0 mb-5 " style={{ fontFamily: '"Cabin", sans-serif' }}>
      <div className="relative container mx-auto px-4 flex flex-col lg:flex-row items-stretch z-20">
      
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative mb-12 lg:mb-0 h-[450px] lg:h-[550px] overflow-hidden">
  <video
    autoPlay
    loop
    
    playsInline
    className="w-full h-full object-cover"
  >
   <source src={video} type="video/mp4" />
   <img src={mainImage} alt="Fallback" className="w-full h-full object-cover" />
    Your browser does not support the video tag.
  </video>
</div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col justify-between h-[450px] lg:h-[550px] ">

          {/* Top - Kandola Enterprises */}
          
            <p className="text-black text-xl  font-semibold">• Kandola Enterprises</p>
          

          {/* Middle - Main Content */}
          <div className="font-normal">
            <p className="text-[#A9ABAA] font-normal  mb-2">
              At Kandola Enterprises, we empower individuals and businesses to take control of their financial future through expert guidance and strategic consulting. Our services are designed to strengthen financial foundations, restore confidence, 
              and unlock meaningful opportunities—from home ownership to business growth.
            </p>
            <p className="text-[#A9ABAA]  mb-2">
              We recognize that financial challenges can create barriers. That’s why our experienced consultants work closely with each client to assess their unique situation, identify key obstacles, 
              and create customized strategies for long-term financial wellness.
            </p>
            <p className="text-[#A9ABAA] tracking-wider mb-4">
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
                  <div key={index} className="flex items-center tracking-wider text-[#A9ABAA]">
                    <FaCheck className="text-[#FF0000] mr-2" />
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
    </section>
    </>
  );
};

export default OurCompany;
