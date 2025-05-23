import React, { useState } from 'react';
import axios from 'axios';        
import backgroundImage from '../../assets/images/black-bg.jpg';

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
      className="min-h-screen bg-white flex items-center justify-center bg-cover bg-center px-4 py-16"
    
    >
      <div className="w-full max-w-5xl bg-white backdrop-blur-md shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 rounded-lg">

        {/* Left: Form Section */}
        <div className="p-6 sm:p-8 md:p-10">
          <h3 className="text-2xl leading-tight font-semibold mb-6 text-[#FF0000] text-center md:text-left"   style={{ fontFamily: '"Cabin", sans-serif' }}>
            Book Your Appointment
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4"   style={{ fontFamily: '"Cabin", sans-serif' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                className="p-3 border border-[#A9ABAA] focus:outline-none focus:ring-2 focus:ring-[#A9ABAA] w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                className="p-3 border border-[#A9ABAA] focus:outline-none focus:ring-2 focus:ring-[#A9ABAA] w-full"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              className="w-full p-3 border border-[#A9ABAA] focus:outline-none focus:ring-2 focus:ring-[#A9ABAA]"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              className="w-full p-3 border border-[#A9ABAA] focus:outline-none focus:ring-2 focus:ring-[#A9ABAA]"
              required
            />
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Comments / Questions"
              className="w-full p-3 border border-[#A9ABAA] h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#A9ABAA]"
            ></textarea>

            {errorMsg && <p className="text-[#FF0000] tracking-wider font-medium">{errorMsg}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF0000] text-white font-normal py-3 hover:bg-red-600 transition disabled:opacity-50"   style={{ fontFamily: '"Cabin", sans-serif' }}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* Right: Info Section */}
        <div
          className="bg-[#A9ABAA] p-6 sm:p-8 md:p-10 flex flex-col justify-start text-black rounded-tr-lg rounded-br-lg"

        >
          <h2 className="text-2xl sm:text-3xl leading-tight font-bold text-[#FF0000] mb-6"   style={{ fontFamily: '"Cabin", sans-serif' }}>Make An Appointment</h2>
          <p className="mb-6 text-base sm:text-lg font-normal"   style={{ fontFamily: '"Cabin", sans-serif' }}>
            Don’t let financial challenges limit your potential. Contact Kandola Enterprises today for a free consultation and 
            take the first step toward a stronger, more secure financial future.
          </p>
          <ul className="space-y-2 text-base sm:text-lg font-normal mt-6 sm:mt-10">
          {/*  <li>
              <strong className="text-[#FF0000]">📍 Business Address:</strong> 2810 N Church St, PMB 233332, Wilmington, Delaware 19802-4447 US
            </li> */}
            <li>
              <strong className="text-[#FF0000]"   style={{ fontFamily: '"Cabin", sans-serif' }}>📞 Phone:</strong> +1 9494316385
            </li>
            <li>
              <strong className="text-[#FF0000]" style={{ fontFamily: '"Cabin", sans-serif' }}>📧 Email: </strong><span>info</span><span className='text-sm leading-tight'>@</span><span Style={{ fontFamily: '"Cabin", sans-serif' }}>kandolaenterprises.com</span>
            </li>
            <li>
              <strong className="text-[#FF0000]"   style={{ fontFamily: '"Cabin", sans-serif' }}>🤝 In Person Meeting:</strong> Available
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AppointmentCard;
