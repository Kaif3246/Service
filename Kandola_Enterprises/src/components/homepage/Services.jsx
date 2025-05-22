import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import {
  FaChartLine,
  FaCogs,
  FaUserTie,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

export default function FullPageScroll() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const sections = [
    {
      icon: <FaChartLine size={50} className="text-[#e91617] mb-4" />,
      title: "Repossession",
      text: "Helping you eliminate the negative effects of repossessions on your credit.",
    },
    {
      icon: <FaCogs size={50} className="text-[#e91617] mb-4" />,
      title: "Medical Expense Management",
      text: "Supporting you in managing and negotiating medical debts to reduce financial stress.",
    },
    {
      icon: <FaUserTie size={50} className="text-[#e91617] mb-4" />,
      title: "Financial Record Review",
      text: "Ensuring your financial records reflect accurate and up-to-date information through expert analysis and support.",
    },
    {
      icon: <FaLightbulb size={50} className="text-[#e91617] mb-4" />,
      title: "Debt Resolution Planning",
      text: "Creating smart settlement plans with creditors to help you regain control of your financial future.",
    },
    {
      icon: <FaRocket size={50} className="text-[#e91617] mb-4" />,
      title: "Credit & Financial Guidance",
      text: "Offering expert insight on credit usage, debt management, and financial planning for long-term success.",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      let scrollAmount;
      if (direction === "left") {
        scrollAmount = scrollLeft - clientWidth;
        if (scrollAmount < 0) scrollAmount = 0;
      } else {
        scrollAmount = scrollLeft + clientWidth;
        if (scrollAmount > scrollWidth - clientWidth) {
          scrollAmount = scrollWidth - clientWidth;
        }
      }
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Heading Section */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FF0000] mb-4">
          Empowering You Through Tailored Support
        </h1>
      </div>

      <div className="text-center max-w-[90%] mx-auto mb-20">
        <p className="text-[#000000] mb-6 font-normal leading-relaxed">
          We take a personalized approach to financial empowerment—because no two journeys are the same. <br />
          Our solutions are thoughtfully tailored to your unique goals, challenges, and long-term success.
        </p>
      </div>

      {/* Card Scroll Section */}
      <div className="px-4 flex flex-col pb-0 mb-25" style={{ fontFamily: '"Cabin", sans-serif' }}>
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide px-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overflowY: "hidden",
            height: "320px", // card height same as h-80 (80 * 4 = 320px)
          }}
        >
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

          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="slide-bg flex-shrink-0 w-72 h-80 bg-white p-4 shadow-lg cursor-pointer flex flex-col justify-start"
              style={{ scrollSnapAlign: "start" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div>
                <div className="mb-3">{React.cloneElement(section.icon, { size: 40 })}</div>
                <h2 className="font-semibold text-lg mb-2">{section.title}</h2>
                <p className="text-[#A9ABAA]">{section.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
