import React, { useRef, useEffect } from "react";
import {
  FaChartLine,
  FaCogs,
  FaUserTie,
  FaLightbulb,
  FaRocket,
  FaHandsHelping,
  FaBriefcase,
} from "react-icons/fa";



const sections = [
  {
    icon: <FaChartLine size={50} className="text-[#e91617] mb-4" />,
    title: "Strategic Consulting",
    text: "Tailored insights and growth plans to help business owners scale with clarity and confidence",
  },
  {
    icon: <FaCogs size={50} className="text-[#e91617] mb-4" />,
    title: "Business Formation & Structuring",
    text: "Guidance for new and existing businesses to properly set up or restructure for long-term success",
  },
  {
    icon: <FaUserTie size={50} className="text-[#e91617] mb-4" />,
    title: "Funding Support & Strategy",
    text: "Lender matching and custom funding strategies designed for your business goals",
  },
  {
    icon: <FaLightbulb size={50} className="text-[#e91617] mb-4" />,
    title: "Profile and Fundability Optimization",
    text: "Improve financial profiles to increase your chances of approval and access better funding.",
  },
  {
    icon: <FaRocket size={50} className="text-[#e91617] mb-4" />,
    title: "Marketing & Sales Strategy",
    text: "Build campaigns and funnels that attract ideal clients and drive consistent revenue.",
  },
  {
    icon: <FaHandsHelping size={50} className="text-[#e91617] mb-4" />,
    title: "Compliance & Readiness ",
    text: "Ensure you're legally protected and structurally sound for lenders and regulators",
  },
  {
    icon: <FaBriefcase  size={50} className="text-[#e91617] mb-4" />,
    title: "Systems & Digital Infrastructure",
    text: "Create scalable back-end systems, automation, and websites that support your brand growth",
  },
];


export default function FullPageScroll() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const autoScroll = () => {
      if (!scrollContainer) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

      if (scrollLeft + clientWidth >= scrollWidth) {
        // If end reached, scroll back to start
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" }); // scroll by 300px
      }
    };

    const interval = setInterval(autoScroll, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 flex flex-col" style={{ fontFamily: '"Poppins", sans-serif' }}>
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-[#FF0000] font-cabin">
          Empowering You Through Tailored Support
        </h1>
      </div>

      {/* Description */}
      <div className="text-center max-w-[90%] mx-auto mb-8" style={{ fontFamily: '"Poppins", sans-serif' }}>
        <p className="text-[#000] font-normal text-lg font-cabin">
          We take a personalized approach to financial empowerment—because no two journeys are the same. <br />
          Our solutions are thoughtfully tailored to your unique goals, challenges, and long-term success.
        </p>
      </div>

      {/* Auto Scrollable Section */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide px-4 py-4"
        style={{
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          overflowY: "hidden",
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className="w-72 h-80 flex-shrink-0 bg-white p-4 shadow-lg rounded slide-bg"
            style={{ scrollSnapAlign: "start" }}
            
          >
            <div className="mb-3">{section.icon}</div>
            <h2 className="font-semibold text-lg mb-2"style={{ fontFamily: '"Poppins", sans-serif' }} >{section.title}</h2>
            <p className="text-[#A9ABAA] font-normal"style={{ fontFamily: '"Poppins", sans-serif' }}>{section.text}</p>
          </div>
        ))}
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .slide-bg {
          position: relative;
          overflow: hidden;
          z-index: 0;
          color: black;
          transition: color 0.3s ease;
        }
        .slide-bg::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background-color: #D1D5DB;
          z-index: -1;
          transition: left 0.4s ease;
        }
        .slide-bg:hover::before {
          left: 0;
        }
        .slide-bg:hover {
          color: black;
        }
      `}</style>
    </div>
  );
}
