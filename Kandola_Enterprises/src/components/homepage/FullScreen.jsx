import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import heroImage from "../../assets/images/first.jpg";
import secondImage from "../../assets/images/second.jpg";
import thirdImage from "../../assets/images/third.jpg";
import fourthImage from "../../assets/images/fourth.jpg";
import { useNavigate } from "react-router-dom";
import watermarkImage from '../../assets/images/watermark.png';

const FullScreenConvexSection = () => {
  const navigate = useNavigate();

  const images = [heroImage, secondImage, thirdImage, fourthImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = () => {
    navigate("/services");
  };

  return (
    <>
      <style>{`
        @keyframes dotFadeMove {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-6px);
          }
        }
        .animate-dotFadeMove {
          animation: dotFadeMove 2s ease-in-out infinite;
        }
        /* Responsive fixes */
        @media (max-width: 768px) {
          .left-content {
            margin-left: 0 !important;
            padding-left: 1.5rem; /* px-6 */
            padding-right: 1.5rem; /* px-6 */
            height: 50vh;        /* height for content on mobile */
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .left-content h1 {
            font-size: 2.5rem;
            margin: 0.25rem 0;
          }
          .left-content p {
            font-size: 1.125rem;
            max-width: 100%;
          }
          .btn-get-started {
            width: 100% !important;
            justify-content: center;
          }
          .right-image-container {
            height: 50vh;       /* height for image on mobile */
            overflow: hidden;
          }
        }
      `}</style>

      <section
        className="relative bg-white min-h-screen w-full overflow-hidden mb-20"
        style={{ fontFamily: '"Cabin", sans-serif' }}
      >
        {/* Main grid container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto h-screen grid grid-cols-1 md:grid-cols-2">
          {/* 🔴 Red Overlay */}
          <div className="absolute inset-0 bg-[#FF0000] opacity-80 -z-10"></div>

          {/* 🖼️ Background Image */}
          <img
            src={watermarkImage}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover -z-20 opacity-40"
          />

          {/* Left Content */}
          <div
            className="left-content flex flex-col justify-center px-6 md:px-12 py-20"
            style={{ fontFamily: '"Cabin", sans-serif', marginLeft: '-30px' }}
          >
            <h1 className="text-white text-6xl md:text-6xl font-bold m-2">
              We Build
            </h1>
            <h1 className="text-white text-6xl md:text-6xl font-bold m-2">
              the Back End of
            </h1>
            <h1 className="text-white text-6xl md:text-6xl font-bold mb-6">
              Million-Dollar Moves
            </h1>
            <p className="text-white font-normal text-2xl max-w-lg mb-8">
              Discover all the funding you are eligible for and explore your lending
              options with expert guidance.
            </p>
            <button
              onClick={handleClick}
              className="btn-get-started inline-flex items-center gap-2 bg-white text-black hover:bg-black hover:text-white font-normal px-4 py-2 shadow-lg transition duration-300 w-36 justify-center"
            >
              <FiArrowRight className="text-xl" />
              Get Started
            </button>
          </div>

          {/* Right Image - slideshow */}
          <div className="right-image-container h-full w-full relative overflow-hidden">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ userSelect: "none" }}
                draggable={false}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FullScreenConvexSection;
