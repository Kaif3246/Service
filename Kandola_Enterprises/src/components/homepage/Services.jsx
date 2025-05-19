import React from "react";
import heroBg from '../../assets/images/hero-bg.jpg'
import { motion } from 'framer-motion';
import { FaChartLine, FaSyncAlt, FaCogs } from 'react-icons/fa';
import { FiArrowRight } from "react-icons/fi"; // Font Awesome icons
export default function FullPageScroll() {
    const sections = [
        {
            icon: <FaChartLine size={50} className="text-red-400 mb-4" />,
            title: "Strategic Planning Execution",
            text: "In today's dynamic business environment, success lies in strategic planning and execution.",
            bg: heroBg,
        },
        {
            icon: <FaSyncAlt size={50} className="text-red-400 mb-4" />,
            title: "Business Transformation",
            text: "Helping you adapt to the rapidly changing market.",
            bg: heroBg,
        },
        {
            icon: <FaCogs size={50} className="text-red-400 mb-4" />,
            title: "Operational Excellence",
            text: "Optimize your processes with us.",
            bg: heroBg,
        },
    ];
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth  mt-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>
                {`::-webkit-scrollbar { display: none; }`}
            </style>
            {/* 🔰 Static Heading Section - Before scrollable sections */}
            <section className="snap-start h-50 flex flex-col justify-start  bg-white text-black py-6 px-10">
                <h2 className="text-2xl text-red-500 mb-4 ">• Tranformative Solution •</h2>
                <h1 className="text-5xl font-bold mb-4 ">Get Our Exclusive Services</h1>

            </section>


            {sections.map((section, idx) => (
                <motion.section
                    key={idx}
                    className="snap-start h-[90%] bg-white flex items-center justify-center bg-cover bg-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Content box with margin inside the section */}
                    <div className="flex w-[92%] h-[98%] bg-black bg-opacity-60 rounded-xl shadow-xl overflow-hidden">
                        {/* Left: Text */}
                        <div className="w-1/2 flex flex-col justify-center items-start px-20 text-white gap-4">
                            <motion.div
                                whileInView={{ rotate: [0, -10, 10, -10, 10, 0] }}
                                transition={{ duration: 0.6, ease: 'easeInOut' }}
                                viewport={{ once: false, amount: 0.5 }}
                            >
                                {section.icon}
                            </motion.div>

                            {/* Title */}
                            <h1 className="text-5xl font-bold">{section.title}</h1>

                            {/* Text */}
                            <p className="text-lg">{section.text}</p>

                            {/* Button */}
                            <button className="cta-button mt-6 inline-flex items-center gap-2 bg-white text-red-500 hover:bg-red-500 hover:text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                                <FiArrowRight className="text-xl" />
                                Free consultation
                            </button>
                        </div>


                        {/* Right: Image */}
                        <div className="w-1/2 h-full flex items-center justify-center">
                            <img
                                src={section.bg}
                                alt={section.title}
                                className="max-h-[100%] max-w-[90%] rounded-xl shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </motion.section>

            ))}
        </div>

    );
}
