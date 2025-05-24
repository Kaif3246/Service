import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/images/first.jpg';

const Service = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services/form');
  };

  return (
    <div
      className="min-h-screen px-4 sm:px-6 md:px-10 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg"
      style={{
        fontFamily: '"Poppins", sans-serif',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
      }}
    >
      <div className="w-full md:w-1/2 h-full  bg-opacity-60 p-6 rounded-md flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Compare clear <br />
          <span className="text-[#FF0000]">small business loan options</span>
        </h1>
        <p className="text-base sm:text-lg mb-6">
          Complete one easy application, and gain access to SBA 7(a) loans, term loans,
          invoice factoring, business credit cards, and more.
        </p>
        <button
          onClick={handleClick}
          className="bg-[#FF0000] text-white hover:bg-black hover:text-[#FF0000] px-6 py-3 text-lg sm:text-xl w-100 font-semibold transition"
        >
          Book Your Consultation
        </button>
      </div>
    </div>
  );
};

export default Service;
