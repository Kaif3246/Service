import React from 'react';

const FunFacts = () => {
  const stats = [
    { number: '95%', label: 'Complete project' },
    { number: '20M', label: 'Reach worldwide' },
    { number: '8.5x', label: 'Faster growth' },
    { number: '100+', label: 'Awards archived' },
  ];

  return (
    <section className="min-h-[5%]  mt-10 mb-20" style={{ fontFamily: '"Cabin", sans-serif' }}>
   
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white  shadow-md py-10 text-center border border-gray-200">
            <h3 className="text-6xl font-semibold  text-gray-900">{stat.number}</h3>
            <p className="text-[#A9ABAA]  mt-2 font-normal ">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
