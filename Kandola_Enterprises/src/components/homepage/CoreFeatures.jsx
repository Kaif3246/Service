import React from "react";
import { FiLayers, FiTarget, FiPieChart, FiSettings } from "react-icons/fi";

const features = [
  {
    title: "Quick solutions",
    icon: <FiLayers className="feature-icon" />,
    description:
      "Our consultancy excels in providing quick solutions tailored to your business challenges",
  },
  {
    title: "Expert advice",
    icon: <FiTarget className="feature-icon" />,
    description:
      "Our consultancy excels in providing quick solutions tailored to your business challenges",
  },
  {
    title: "Strategic planning",
    icon: <FiPieChart className="feature-icon" />,
    description:
      "Our consultancy excels in providing quick solutions tailored to your business challenges",
  },
  {
    title: "Efficient operations",
    icon: <FiSettings className="feature-icon" />,
    description:
      "Our consultancy excels in providing quick solutions tailored to your business challenges",
  },
];

const CoreFeatures = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
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
        <p className="text-red-500 font-semibold mb-2">• NUMBER #1 SOLVER •</p>
        <h2 className="text-4xl font-bold mb-4">Explore our core features</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our mission is to empower businesses to thrive in solutions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white overflow-hidden p-6 rounded-lg shadow-md group transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Red overlay */}
              <span className="absolute left-0 top-0 h-full w-0 bg-red-100 z-0 transition-all duration-500 ease-in-out group-hover:w-full"></span>

              <div className="relative z-10">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
