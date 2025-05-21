import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const testimonials = [
    {
        text: "Our experience with Solvior has been nothing short of exceptional.Our experience with Solvior has been nothing short of exceptional. Our experience with Solvior has been nothing short of exceptional. Our experience with Solvior has been nothing short of exceptional. Our experience with Solvior has been nothing short of exceptional. From day one, their team demonstrated a deep understanding of our industry and quickly identified key areas for improvement.",
        name: "Jack William",
        role: "Sr. Manager",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        text: "Their thorough market analysis and customized strategies helped us streamline operations.Our experience with Solvior has been nothing short of exceptional. Our experience with Solvior has been nothing short of exceptional. Our experience with Solvior has been nothing short of exceptional. Our experience with Solvior has been nothing short of exceptional. We saw a significant increase in our bottom line.",
        name: "Burdee Nicolas",
        role: "Sr. Executive",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        text: "Solvior helped us improve customer engagement through innovative digital strategies.  Our experience with Solvior has been nothing short of exceptional. Our experience with Solvior has been nothing short of exceptional. Our experience with Solvior has been nothing short of exceptional.  Our experience with Solvior has been nothing short of exceptional.We loved their data-first approach!",
        name: "Riya Desai",
        role: "Marketing Head",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
];

const Testimonials = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Section: Heading + Arrows */}
                <div className="flex items-center justify-between mb-14">
                    <div>
                        <p className="text-red-500 font-semibold text-sm tracking-wider">• TESTIMONIALS •</p>
                        <h2 className="text-4xl leading-tight md:text-5xl font-bold mt-2">Listening to our clients</h2>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => sliderRef.current.slickPrev()}
                            className="w-10 h-10  bg-white text-red-500 shadow hover:bg-red-500 hover:text-white transition"
                        >
                            <FiArrowLeft className="mx-auto text-3xl" />
                        </button>
                        <button
                            onClick={() => sliderRef.current.slickNext()}
                            className="w-10 h-10  bg-white text-red-500 shadow hover:bg-red-500 hover:text-white transition"
                        >
                            <FiArrowRight className="mx-auto text-3xl" />
                        </button>
                    </div>
                </div>

                <Slider {...settings} ref={sliderRef}>
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="px-4 h-full">
                            <div className="bg-gray-300  p-8 shadow-md min-h-[420px] max-h-[420px] overflow-y-auto flex flex-col h-full">
                                {/* Text + Quote icon */}
                                <div className="flex items-start gap-4 mb-auto">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                        <FaQuoteLeft className="text-4xl text-red-500" />
                                    </div>
                                    <p className="text-gray-700 text-base tracking-wider">{item.text}</p>
                                </div>

                                {/* Line + Footer */}
                                <div>
                                    <hr className="mb-6" />
                                    <div className="flex items-center tracking-wider gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-14 h-14  object-cover"
                                        />
                                        <div>
                                            <div className="flex gap-1 mb-1">
                                                {[...Array(item.rating)].map((_, i) => (
                                                    <FaStar key={i} className="text-red-500 text-2xl" />
                                                ))}
                                            </div>
                                            <h4 className="font-semibold tracking-wider text-lg">{item.name}</h4>
                                            <p className="text-gray-500 tracking-wider text-sm">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
};

export default Testimonials;
