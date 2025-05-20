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
      icon: <FaSyncAlt size={50} className="text-red-500 mb-4" />,
      title: "Late Payments",
      text: "Assisting you in correcting or removing late payment entries from your credit report.",
    },
    {
      icon: <FaCogs size={50} className="text-red-500 mb-4" />,
      title: "Medical Bills",
      text: "Handling and resolving unpaid medical bills impacting your credit report.",
    },
    {
      icon: <FaUserTie size={50} className="text-red-500 mb-4" />,
      title: "Dispute",
      text: "Disputing inaccuracies on your credit report to ensure it accurately reflects your financial history.",
    },
    {
      icon: <FaLightbulb size={50} className="text-red-500 mb-4" />,
      title: "Settlement",
      text: "Negotiating with creditors to settle outstanding debts for less than the full amount owed and updating your credit report accordingly.",
    },
    {
      icon: <FaRocket size={50} className="text-red-500 mb-4" />,
      title: "Credit Card and More",
      text: "Providing expert guidance and solutions for managing credit card debt and other credit-related challenges.",
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
          <h1 className="text-5xl font-bold text-black">
            Benefit from Our Exclusive Services
          </h1>
          <p className="mt-4 max-w-xl text-gray-700 text-lg">
            We believe in a personalized approach to credit repair,
            recognizing that every client’s situation is unique. That’s why we
            customize our strategies to fit your individual needs and goals.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white text-red-500 shadow hover:bg-red-500 hover:text-white transition"
            aria-label="Scroll Left"
          >
            <FiArrowLeft className="mx-auto text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white text-red-500 shadow hover:bg-red-500 transition"
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
            className="slide-bg flex-shrink-0 w-96 h-96 bg-white rounded-xl p-6 text-black shadow-lg cursor-pointer flex flex-col justify-between"
            style={{ scrollSnapAlign: "start" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <div className="mb-4">{section.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <p className="text-sm">{section.text}</p>
            </div>

            <button onClick={handleClick} className="mt-6 inline-flex items-center gap-2 bg-white text-red-500 hover:bg-red-500 hover:text-white font-semibold px-4 py-2 rounded-full shadow-lg transition duration-300">
              Free consultation <FiArrowRight className="text-xl" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
