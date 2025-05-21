import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import {
  FaChartLine,
  FaSyncAlt,
  FaCogs,
  FaUserTie,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export default function FullPageScroll() {
    
  const scrollRef = useRef(null);

  const sections = [
    {
      icon: <FaChartLine size={50} className="text-red-500 mb-4" />,
      title: "Repossession",
      text: "Helping you eliminate the negative effects of repossessions on your credit.",
    },
    {
        icon: <FaCogs size={50} className="text-red-500 mb-4" />,
        title: "Medical Expense Management",
        text: "Supporting you in managing and negotiating medical debts to reduce financial stress.",
      },
      {
        icon: <FaUserTie size={50} className="text-red-500 mb-4" />,
        title: "Financial Record Review",
        text: "Ensuring your financial records reflect accurate and up-to-date information through expert analysis and support.",
      },
      {
        icon: <FaLightbulb size={50} className="text-red-500 mb-4" />,
        title: "Debt Resolution Planning",
        text: "Creating smart settlement plans with creditors to help you regain control of your financial future.",
      },
      {
        icon: <FaRocket size={50} className="text-red-500 mb-4" />,
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
  const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/services'); // Change to your desired route
    };
  

  return (
    <div className="mt-10 px-10 h-screen flex flex-col">
      {/* Header with title and arrows */}
      <section className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-5xl leading-tight font-bold text-black">
          Empowering You Through Tailored Support
          </h1>
          <p className="mt-4 max-w-xl text-gray-700 tracking-wider text-lg">
          We take a personalized approach to financial empowerment—because no two journeys are the same. 
          Our solutions are thoughtfully tailored to your unique goals, challenges, and long-term success.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10  bg-white text-red-500 shadow hover:bg-red-500 hover:text-white transition"
            aria-label="Scroll Left"
          >
            <FiArrowLeft className="mx-auto text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10  bg-white text-red-500 shadow hover:bg-red-500 transition"
            aria-label="Scroll Right"
          >
            <FiArrowRight className="mx-auto text-2xl" />
          </button>
        </div>
      </section>

      {/* Cards container */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide flex-grow"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
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
            background-color: #D1D5DB; /* light red */
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
         className="slide-bg flex-shrink-0 w-72 h-80 bg-white p-4 text-black shadow-lg cursor-pointer flex flex-col justify-between"
         style={{ scrollSnapAlign: "start" }}
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, ease: "easeOut" }}
         viewport={{ once: true }}
       >
         <div>
           <div className="mb-3">{React.cloneElement(section.icon, { size: 40 })}</div>
           <h2 className="text-xl font-semibold mb-2 tracking-wide">{section.title}</h2>
           <p className="text-sm text-gray-700 tracking-wide leading-relaxed">{section.text}</p>
         </div>
       
         <button
           onClick={handleClick}
           className="mt-4 inline-flex items-center gap-2 bg-white text-red-500 hover:bg-red-500 hover:text-white font-medium px-3 py-1.5 text-sm shadow transition"
         >
           Free consultation <FiArrowRight className="text-lg" />
         </button>
       </motion.div>
       
        ))}
      </div>
    </div>
  );
}
