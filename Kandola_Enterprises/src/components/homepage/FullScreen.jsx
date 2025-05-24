import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import heroImage from "../../assets/images/first.jpg";
import secondImage from "../../assets/images/second.jpg";
import thirdImage from "../../assets/images/third.jpg";
import fourthImage from "../../assets/images/fourth.jpg";
import fifthImage from "../../assets/images/fifth.jpg"
import { useNavigate } from "react-router-dom";
import watermarkImage from '../../assets/images/watermark3.png';

const FullScreenConvexSection = () => {
  const navigate = useNavigate();
  const images = [heroImage, secondImage, thirdImage, fourthImage,fifthImage];
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
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-6px); }
        }
        .animate-dotFadeMove {
          animation: dotFadeMove 2s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .left-content h1 {
            font-size: 2rem;
            margin: 0.25rem 0;
          }
          .left-content p {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
          .btn-get-started {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <section
        className="relative bg-white w-full overflow-hidden mb-20"
        style={{ fontFamily: '"Cabin", sans-serif' }}
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[80%] md:h-screen">

          {/* Red gradient overlay */}
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black to-transparent -z-10"></div>

          {/* Background image wrapper */}
          <div className="absolute top-0 left-0 h-[50vh] md:h-full w-full md:w-1/2 z-[-20]">
            <img
              src={watermarkImage}
              alt="background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Left content */}
          <div className="left-content flex flex-col justify-center px-6 md:px-12 py-16 md:py-20 z-10 h-[50vh] md:h-full">
            <h1 className="text-white text-4xl md:text-5xl font-bold m-2">We Build</h1>
            <h1 className="text-white text-4xl md:text-5xl font-bold m-2">the Back End of</h1>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">Million-Dollar Moves</h1>
            <p className="text-white font-normal text-lg md:text-2xl max-w-lg mb-8 md:mb-20">
              Discover all the funding you are eligible for and explore your lending
              options with expert guidance.
            </p>
            <button
              onClick={handleClick}
              className="btn-get-started inline-flex items-center gap-2 bg-white text-black hover:bg-black hover:text-white font-normal px-4 py-2 shadow-lg transition duration-300 w-full md:w-60" style={{ fontFamily: '"Cabin", sans-serif' }}
            >
              <FiArrowRight className="text-xl" />
              Let's Get You Funded
            </button>
          </div>

          {/* Right image slideshow */}
          <div className="right-image-container h-[50vh] md:h-full w-full relative overflow-hidden">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
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
