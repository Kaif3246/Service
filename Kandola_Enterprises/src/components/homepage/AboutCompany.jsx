import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import backgroundVideo from '../../assets/images/main.mp4'


const FullScreenConvexSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
  };

  return (
    <>
      <style>{`
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
        className="relative w-full min-h-screen flex items-center px-6 md:px-12 py-20 mb-40"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full min-h-screen object-cover -z-10"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="left-content max-w-4xl text-left text-white relative z-10" style={{ fontFamily: '"Poppins", sans-serif' }}>
          <h1 className="text-4xl md:text-5xl font-bold m-2" style={{ fontStyle: 'italic' }}>We Build</h1>
          <h1 className="text-4xl md:text-5xl font-bold m-2" style={{ fontStyle: 'italic' }}>the Back End of</h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontStyle: 'italic' }}>Million-Dollar Moves</h1>
          <p className="font-normal text-lg md:text-2xl max-w-lg mb-8 md:mb-20" style={{ fontFamily: '"Poppins", sans-serif' }}>
            Discover all the funding you are eligible for and explore your lending
            options with expert guidance.
          </p>
          <button
            onClick={handleClick}
            className="btn-get-started inline-flex items-center gap-2 bg-white text-black hover:bg-black hover:text-white font-normal px-6 py-3 shadow-lg transition duration-300 w-full md:w-auto" style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            <FiArrowRight className="text-xl" />
            Let's Get You Funded
          </button>
        </div>
      </section>
    </>
  );
};

export default FullScreenConvexSection;
