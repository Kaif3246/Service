import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/services/form'); // Change to your desired route
  };

  return (
    <div className="bg-black text-white px-6 py-12 flex flex-col md:flex-row items-center justify-between  shadow-lg">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Compare clear <br />
          <span className="text-red-500">small business loan options</span>
        </h1>
        <p className="text-lg mb-6 text-gray-300">
          Complete one easy application, and gain access to SBA 7(a) loans, term loans, invoice factoring, business credit cards, and more.
        </p>
        <button
          onClick={handleClick}
          className="bg-white text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Book Your Consultation
        </button>
      </div>

    </div>
  );
};

export default Service;
