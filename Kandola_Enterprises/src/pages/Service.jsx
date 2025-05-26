import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/images/service.png';

const Service = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services/form');
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Background Image Section */}
      <div
  className="h-[70vh] w-full"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
></div>


      {/* Content Section with Left-to-Right Gradient, full width */}
      <div className="bg-gradient-to-r from-white to-[#A9ABAA] flex flex-col items-start text-left px-6 py-16 w-full">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          Compare clear <br />
          <span className="text-[#FF0000]">small business loan options</span>
        </h1>
        <p className="text-lg mb-8 text-black" style={{ fontFamily: '"Poppins", sans-serif' }}>
          Complete one easy application, and gain access to SBA 7(a) loans, term loans,
          invoice factoring, business credit cards, and more.
        </p>
        <button
          onClick={handleClick}
          className="bg-[#FF0000] text-white hover:bg-black hover:text-[#FF0000] px-8 py-4 text-lg font-semibold transition rounded"
        >
          Book Your Consultation
        </button>
      </div>
    </div>
  );
};

export default Service;
