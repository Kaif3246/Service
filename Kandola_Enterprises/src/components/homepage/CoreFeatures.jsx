import React from "react";
import { FiLayers, FiTarget, FiPieChart, FiSettings } from "react-icons/fi";

const features = [
  {
    title: "Quick solutions",
    icon: <FiLayers className="feature-icon" />,
    description:"We resolve financial roadblocks quickly—so you can focus on building momentum and achieving long-term goals.",
  },
  {
    title: "Expert advice",
    icon: <FiTarget className="feature-icon" />,
    description:
      "Work with experienced professionals who understand how to strengthen your financial foundation and unlock new opportunities.",
  },
  {
    title: "Strategic planning",
    icon: <FiPieChart className="feature-icon" />,
    description:
      "We don’t just solve problems—we craft strategic solutions that support lasting success and future growth.",
  },
  {
    title: "Efficient operations",
    icon: <FiSettings className="feature-icon" />,
    description:
      "Our refined process is built for clarity, speed, and results—so you see progress without unnecessary delays.",
  },
];

const CoreFeatures = () => {
  return (
    <section className="min-h-[150%] py-20 bg-white text-center flex items-center mb-20 mt-0">
      {/* Custom shake animation CSS */}
      <style>
        {`
          .feature-icon {
            font-size: 2rem;
            color: #ef4444; /* Tailwind red-500 */
            margin: 0 auto 1rem auto;
            transition: transform 0.3s ease;
          }

          .group:hover .feature-icon {
            animation: shake 0.5s ease-in-out;
          }

          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-4px); }
            40% { transform: translateX(4px); }
            60% { transform: translateX(-4px); }
            80% { transform: translateX(4px); }
          }
        `}
      </style>

      <div className="container mx-auto px-4">
        
        <h2 className="text-4xl font-bold leading-tight mb-4">See Our Core Strengths </h2>
        <p className="text-gray-600 tracking-wider mb-12 max-w-2xl mx-auto">
        Our mission is to empower businesses to achieve sustainable growth through strategic, customized solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white overflow-hidden p-6  shadow-md group transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Red overlay */}
              <span className="absolute left-0 top-0 h-full w-0 bg-gray-300 z-0 transition-all duration-500 ease-in-out group-hover:w-full"></span>

              <div className="relative z-10">
                {feature.icon}
                <h3 className="text-xl font-semibold leading-tight mb-2">{feature.title}</h3>
                <p className="text-gray-600 tracking-wider">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
