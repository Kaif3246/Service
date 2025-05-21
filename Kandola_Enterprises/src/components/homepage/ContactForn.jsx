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

      // Show popup alert with success message
      alert(response.data.message || 'Form submitted successfully!');

      // Clear form data after alert is closed
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comments: ''
      });

    } catch (error) {
      if (error.response) {
       // setErrorMsg(error.response.data.message || 'Something went wrong.');
        alert(error.response.data.message); // 
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
    <div className="min-h-screen bg-gray-300 flex items-center justify-center bg-cover bg-center px-4 py-16">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md  shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left: Form Section */}
        <div className="p-8 md:p-10">
          <h3 className="text-2xl leading-tight font-bold mb-6 text-gray-800">Book Your Appointment</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 tracking-wider sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                className="p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                className="p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Comments / Questions"
              className="w-full p-3 border border-gray-300  h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>

            {errorMsg && <p className="text-red-600 tracking-wider font-medium">{errorMsg}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 text-white tracking-wider font-semibold py-3  hover:bg-red-600 transition disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* Right: Info Section */}
        <div
          className="bg-white p-4 md:p-10 flex flex-col justify-start"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        >
          <h2 className="text-3xl text-white leading-tight font-bold mb-6">Make An Appointment</h2>
          <p className="mb-6 text-base tracking-wider text-gray-300">
          Don’t let financial challenges limit your potential. Contact Kandola Enterprises today for a free consultation and 
          take the first step toward a stronger, more secure financial future.
          </p>
          <ul className="space-y-2 text-sm tracking-wider text-gray-300 mt-10">
            <li>
              <strong className="text-red-500 tracking-wider">📍 Business Address:</strong> 2810 N Church St, PMB 233332, Wilmington, Delaware 19802-4447 US
            </li>
            <li>
              <strong className="text-red-500 tracking-wider">📞 Phone:</strong> +1 9494316385
            </li>
            <li>
              <strong className="text-red-500 tracking-wider">📧 Email:</strong> info@kandolaenterprises.com
            </li>
            <li>
              <strong className="text-red-500 tracking-wider">🤝 In Person Meeting:</strong> Available
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AppointmentCard;
