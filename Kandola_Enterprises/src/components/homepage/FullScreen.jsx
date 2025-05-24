import React from "react";
import { FiArrowRight } from "react-icons/fi";
import watermarkImage from '../../assets/images/second.jpg';
import { useNavigate } from "react-router-dom";

const FullScreenConvexSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services");
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            height: 450px;
          }

          .hero-bg {
            height: 450px;
            width: 100%;
            object-fit: cover;
          }

          .left-content {
            margin-top: 10rem;
          }

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

      <section className="hero-section relative w-full flex items-center px-6 md:px-12 py-20 mb-20 md:min-h-screen">
        {/* Background Image */}
        <img
          src={watermarkImage}
          alt="Background"
          className="hero-bg absolute inset-0 w-full h-full object-cover -z-10"
          draggable={false}
        />

        {/* Content */}
        <div
          className="left-content max-w-4xl text-left text-white relative z-10 mt-20 md:mb-10"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          <h1 className="text-4xl md:text-5xl font-bold m-2" style={{ fontStyle: 'italic' }}>We Build</h1>
          <h1 className="text-4xl md:text-5xl font-bold m-2" style={{ fontStyle: 'italic' }}>the Back End of</h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontStyle: 'italic' }}>Million-Dollar Moves</h1>
          <p className="font-normal text-lg md:text-2xl max-w-lg mb-8 md:mb-20">
            Discover all the funding you are eligible for and explore your lending
            options with expert guidance.
          </p>
          <button
       
            className="btn-get-started inline-flex items-center gap-2 bg-white text-black hover:bg-black hover:text-white font-normal px-6 py-3 shadow-lg transition duration-300 w-full md:w-auto"
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
