import React from 'react';

const FunFacts = () => {
  const stats = [
    { number: '95%', label: 'Complete project' },
    { number: '20M', label: 'Reach worldwide' },
    { number: '8.5x', label: 'Faster growth' },
    { number: '100+', label: 'Awards archived' },
  ];

  return (
    <section className="bg-[#fad1d0] py-20 mt-10">
      <div className="text-center mb-16">
        <p className="text-red-500 text-sm font-semibold tracking-widest">• FUN FACTS •</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Exploring fun tidbits and<br />fascinating facts</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md py-10 text-center border border-gray-200">
            <h3 className="text-6xl font-bold text-gray-900">{stat.number}</h3>
            <p className="text-gray-500 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
