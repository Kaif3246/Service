import React, { useRef } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

const testimonials = [
  {
    text:"Running a business is hard, but managing finances during a downturn is even harder, improving cash flow, and restructuring our operations. More than anything, they brought clarity to the chaos. Within six months, we turned the corner and even began scaling.",
    name: "Jack William",
    role: "Sr. Manager",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Working with Kandola Enterprises was one of the most pivotal decisions I made for my business. As a small business owner, I was struggling with inconsistent cash flow, unclear financial goals, and a complete lack of strategic direction.",
    name: "Burdee Nicolas",
    role: "Sr. Executive",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    text: "Before I approached Kandola Enterprises, I felt completely lost. Years of medical bills, a repossessed vehicle, and poor credit decisions had left me overwhelmed. What stood out about Kandola was their non-judgmental approach — they made me feel seen, heard, and supported.",
    name: "Riya Desai",
    role: "Marketing Head",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Running a business is hard, but managing finances during a downturn is even harder, improving cash flow, and restructuring our operations. More than anything, they brought clarity to the chaos. Within six months, we turned the corner and even began scaling.",
    name: "Jack William",
    role: "Sr. Manager",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Before I approached Kandola Enterprises, I felt completely lost. Years of medical bills, a repossessed vehicle, and poor credit decisions had left me overwhelmed. What stood out about Kandola was their non-judgmental approach — they made me feel seen, heard, and supported.",
    name: "Burdee Nicolas",
    role: "Sr. Executive",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    text: "Working with Kandola Enterprises was one of the most pivotal decisions I made for my business. As a small business owner, I was struggling with inconsistent cash flow, unclear financial goals, and a complete lack of strategic direction.",
    name: "Riya Desai",
    role: "Marketing Head",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      let scrollAmount =
        direction === "left"
          ? Math.max(scrollLeft - clientWidth, 0)
          : Math.min(scrollLeft + clientWidth, scrollWidth - clientWidth);
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold  text-[#FF0000]">
          Listening to our clients
        </h2>
      </div>

      <div className="min-h-screen relative px-4">
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto overflow-y-hidden scrollbar-hide"
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
          `}</style>

          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              className="scroll-slide flex-shrink-0 w-80 h-[420px] bg-white shadow-lg p-6 flex flex-col justify-between"
              style={{ scrollSnapAlign: "start" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                  <FaQuoteLeft className="text-3xl text-[#FF0000]" />
                </div>
                <p className="text-[#A9ABAA] text-base font-normal">
                  {item.text}
                </p>
              </div>

              <div>
                <hr className="my-4" />
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} className="text-[#FF0000] text-base" />
                      ))}
                    </div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-[#A9ABAA] text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
