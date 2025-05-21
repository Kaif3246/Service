import React from "react";
import { FiLayers, FiTarget, FiPieChart, FiSettings } from "react-icons/fi";

const features = [
    {
        title: "New Financial Opportunities",
        icon: <FiLayers className="feature-icon" />,
        description:
            "Explore funding solutions tailored to your business. We connect you with a wide range of financial resources, ensuring your business receives the support it needs to grow and succeed.",
    },
    {
        title: "Personal and Business Financial Enhancement",
        icon: <FiTarget className="feature-icon" />,
        description:
            "Build a strong personal financial foundation and elevate your business profile. Our experts offer personalized support to help you secure better financial terms and unlock valuable partnership opportunities.",
    },
    {
        title: "Strategic Business Building",
        icon: <FiPieChart className="feature-icon" />,
        description:
            "A strong business profile is essential for growth and credibility. We simplify the process, identifying key opportunities to build and strengthen your finance—positioning your business for greater trust and financial success.",
    },
    {
        title: "Proactive Monitoring",
        icon: <FiSettings className="feature-icon" />,
        description:
            "Protect your financial health with around-the-clock monitoring of your personal and business finance. We detect and address issues early, helping you stay secure, informed, and financially stable.",
    },
];

const CoreFeatures = () => {
    return (
        <>

            <div className="justify-center items-center px-120">
                <h2 className="text-4xl font-bold mb-4 text-[#A9ABAA]">What We Offer</h2>
            </div>
            <div className="mb-5 max-w-[90%] mx-auto justify-center items-center">

                <p className="text-[#A9ABAA] font-normal max-w-[90%] mx-auto leading-relaxed">
                    At Kandola enterprises, we believe every business—no matter its size or industry—deserves the chance to succeed. Our Business Consulting services are built to empower entrepreneurs by opening doors to stronger financial opportunities. When you partner with us, you gain more than a service—you gain a committed ally focused on improving your business’s financial health, and long-term growth.
                </p>
            </div>
            <section className="py-10 bg-white text-center mb-20" style={{ fontFamily: '"Cabin", sans-serif' }}>
                {/* Custom shake animation CSS */}
                <style>
                    {`
          .feature-icon {
            font-size: 2rem;
            color: #FF0000;
            margin: 0 auto 0.75rem auto;
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


                <div className="container mx-auto px-4 max-w-5xl">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {features.map((feature, index) => (
      <div
        key={index}
        className="relative bg-white overflow-hidden p-8 shadow-md group transition-shadow duration-300 hover:shadow-lg"
      >
        <span className="absolute left-0 top-0 h-full w-0 bg-gray-300 z-0 transition-all duration-500 ease-in-out group-hover:w-full"></span>

        <div className="relative z-10">
          {feature.icon}
          <h3 className="text-lg font-semibold leading-tight mb-1">{feature.title}</h3>
          <p className="text-[#A9ABAA]  font-normal">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


            </section>
        </>
    );
};

export default CoreFeatures;
