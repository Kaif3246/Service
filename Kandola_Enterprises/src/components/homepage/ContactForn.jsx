import React, { useState } from 'react';
import axios from 'axios';

const AppointmentCard = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await axios.post('http://localhost:8080/api/form/submit-form', formData);
      alert(response.data.message || 'Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comments: ''
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          comments: ''
        });
      } else {
        setErrorMsg('Server error. Please try again later.');
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 px-4 py-16"
      style={{
        background: "linear-gradient(to right, #ffffff, #f0f0f0)" // optional light background
      }}
    >

      {/* Left: Form Section */}
      <div className="p-6 sm:p-10">
        <h3 className="text-2xl font-semibold mb-6 text-[#FF0000]" style={{ fontFamily: '"Poppins", sans-serif' }}>
          Book Your Appointment
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4" style={{ fontFamily: '"Poppins", sans-serif' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name *"
              className="p-3 border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#A9ABAA] w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name *"
              className="p-3 border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#A9ABAA] w-full"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            className="w-full p-3 border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#A9ABAA]"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            className="w-full p-3 border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#A9ABAA]"
            required
          />
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Comments / Questions"
            className="w-full p-3 border border-gray-300 bg-white text-black h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#A9ABAA]"
          ></textarea>

          {errorMsg && <p className="text-[#FF0000] font-medium">{errorMsg}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF0000] text-white font-medium py-3 hover:bg-red-600 transition disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>

      {/* Right: Info Section */}
      <div className="p-6 sm:p-10 flex flex-col justify-center text-black">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#FF0000] mb-6" style={{ fontFamily: '"Poppins", sans-serif' }}>
          Make An Appointment
        </h2>
        <p className="mb-6 text-base sm:text-lg" style={{ fontFamily: '"Poppins", sans-serif' }}>
          Don’t let financial challenges limit your potential. Contact Kandola Enterprises today for a free consultation and
          take the first step toward a stronger, more secure financial future.
        </p>
        <ul className="space-y-2 text-base sm:text-lg mt-6" style={{ fontFamily: '"Poppins", sans-serif' }}>
          <li>
            <strong className="text-[#FF0000]">📞 Phone:</strong> +1 9494316385
          </li>
          <li>
            <strong className="text-[#FF0000]">📧 Email:</strong> info<span className='text-sm'>@</span>kandolaenterprises.com
          </li>
          <li>
            <strong className="text-[#FF0000]">🤝 In Person Meeting:</strong> Available
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppointmentCard;
