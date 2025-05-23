import React from 'react';

const FunFacts = () => {
  const stats = [
    { number: '92%', label: 'Client Retention Rate' },
    { number: '48-Hour Avg', label: 'Turnaround for Strategy Plans' },
    { number: '5-Star', label: 'Client Satisfaction Rating' },
    // { number: '100+', label: 'Awards achieved' },
  ];

  return (
    <section className="mt-10 mb-20" style={{ fontFamily: '"Cabin", sans-serif' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md py-10 text-center border border-gray-200 min-h-[220px] flex flex-col justify-center"
          >
            <h3 className="text-6xl font-semibold text-gray-900">{stat.number}</h3>
            <p className="text-[#A9ABAA] mt-2 font-normal">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;
