import React from 'react';
import backgroundImage from '../../assets/images/black-bg.jpg';

const AppointmentCard = () => {
    return (
        <div
            className="min-h-screen bg-gray-300 flex items-center justify-center bg-cover bg-center px-4 py-16"

        >
            <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Left: Form Section */}
                <div className="p-8 md:p-10">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Book Your Appointment</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name *"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name *"
                                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                                required
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address *"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number *"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                            required
                        />
                        <textarea
                            placeholder="Comments / Questions"
                            className="w-full p-3 border border-gray-300 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Right: Info Section */}
                <div
  className="bg-white p-4 md:p-10 flex flex-col justify-start"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',           // image poori div ko cover karegi
    backgroundPosition: 'center top',  // image ko thoda upar se align karega
  }}
>
  <h2 className="text-3xl text-white font-bold mb-6">Make An Appointment</h2>
  <p className="mb-6 text-base text-gray-300">
    Don’t let a poor credit score hold you back any longer. Contact Cherry Credit Repairs today for your free consultation and take the first step towards a brighter financial future.
  </p>
  <ul className="space-y-2 text-sm text-gray-300 mt-10">
  <li>
    <strong className="text-red-500">📍 Business Address:</strong> 2810 N Church St, PMB 233332, Wilmington,  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delaware 19802-4447 US
  </li>
  <li>
    <strong className="text-red-500">📞 Phone:</strong> +1 9494316385
  </li>
  <li>
    <strong className="text-red-500">📧 Email:</strong> info@kandolaenterprises.com
  </li>
  <li>
    <strong className="text-red-500">🤝 In Person Meeting:</strong> Available
  </li>
</ul>

</div>

            </div>
        </div>
    );
};

export default AppointmentCard;
