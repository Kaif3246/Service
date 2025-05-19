import React from 'react';
import backgroundImage from '../../assets/images/hero-bg.jpg';

const AppointmentCard = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
        {/* Left: Form inside white card */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name *"
                className="w-1/2 p-4 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="w-1/2 p-4 border border-gray-300 rounded"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full p-4 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              className="w-full p-4 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Comments / Questions"
              className="w-full p-4 border border-gray-300 rounded h-28 resize-none"
            ></textarea>
             <button className="cta-button mt-6 inline-flex items-center gap-2 bg-white text-red-500 hover:bg-red-500 hover:text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                                            
                                            Submit
                                        </button>
          </form>
        </div>

        {/* Right: Content over black background image */}
        <div className="w-full md:w-1/2 text-white p-8">
          <h2 className="text-4xl font-bold mb-4">Make An Appointment</h2>
          <p className="mb-4 text-1xl">
            Don’t let a poor credit score hold you back any longer. Contact Cherry Credit Repairs today for your free consultation and take the first step towards a brighter financial future.
          </p>
          <div className="space-y-2 text-sm md:text-base">
            <p><strong>📍 Address:</strong> 21406 Celes St, Woodland Hills, CA 91364</p>
            <p><strong>📞 Phone:</strong> +1 424-744-0222</p>
            <p><strong>📧 Email:</strong> creditrepaircherry@gmail.com</p>
            <p><strong>🤝 In Person Meeting:</strong> Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
