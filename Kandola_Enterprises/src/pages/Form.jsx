import React, { useState } from 'react';
import axios from 'axios';
import bgImage from '../assets/images/third1.jpg';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: '',
    fundingAmount: '',
    timeline: '',
    investment: '',
    inquiryType: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(1, prev - 1));

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/serviceForm/submit-service-form',
        formData
      );
      alert('Form submitted successfully!');
      setFormData({
        goal: '',
        fundingAmount: '',
        timeline: '',
        investment: '',
        inquiryType: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      });
      setStep(1);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={{ fontFamily: '"Poppins", sans-serif' }}>
      {/* Image Banner */}
      <div
        className="h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Form Section */}
      <div className="bg-gradient-to-b from-white to-gray-100 flex justify-center px-4 py-20 text-[#1a1a1a]">
        <div className="w-full max-w-4xl border-t-4 border-black rounded-md shadow-md px-10 py-12 bg-white bg-opacity-90 transition-all duration-500 ease-in-out">
          <p className="text-sm font-semibold text-black mb-2">Step {step}/3</p>
          <div className="w-full bg-[#f5f3ee] h-2 rounded mb-8">
            <div
              className="h-2 bg-black rounded transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {/* Step 1 */}
          <h2 className="text-xl font-semibold mb-4">Goal/Timeline</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">What's your goal?*</label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="w-full border border-[#ccc] rounded px-4 py-3 mb-4"
              >
                <option value="">Please select</option>
                <option value="Grow and enhance business">Grow and enhance business</option>
                <option value="Get a business loan">Get a business loan</option>
                <option value="Build business credit">Build business credit</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Target funding amount?*</label>
              <input
                type="number"
                name="fundingAmount"
                value={formData.fundingAmount}
                onChange={handleChange}
                placeholder="$"
                className="w-full border border-[#ccc] rounded px-4 py-2 mb-4"
              />
            </div>
          </div>

          {/* Step 2 */}
          {step >= 2 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Timeline and Budget</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Time to hit goal?*</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full border border-[#ccc] rounded px-4 py-3 mb-4"
                  >
                    <option value="">Please select</option>
                    <option value="Less than 30 days">Less than 30 days</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3+ months">3+ months</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Investment capacity?*</label>
                  <select
                    name="investment"
                    value={formData.investment}
                    onChange={handleChange}
                    className="w-full border border-[#ccc] rounded px-4 py-3 mb-4"
                  >
                    <option value="">Please select</option>
                    <option value="Under $2,000">Under $2,000</option>
                    <option value="$2,000 - $10,000">$2,000 - $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Step 3 */}
          {step >= 3 && (
            <>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Inquiry for self or client?*</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full border border-[#ccc] rounded px-4 py-3 mb-4"
                  >
                    <option value="">Please select</option>
                    <option value="Myself">Myself</option>
                    <option value="Client">Client</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-[#ccc] rounded px-4 py-2 mb-4"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-[#ccc] rounded px-4 py-3 mb-4"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Mobile Phone*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-[#ccc] rounded px-4 py-3 mb-4"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email Address*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-[#ccc] rounded px-4 py-3 mb-4"
                  />
                </div>
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <button
                onClick={prevStep}
                className="bg-[#A9AbAA] text-[#1a1a1a] px-6 py-3 rounded-md hover:bg-gray-400 transition"
              >
                Back
              </button>
            ) : (
              <div />
            )}
            {step < 3 && formData.goal && formData.fundingAmount && (
              <button
                onClick={nextStep}
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-[#FF0000] transition"
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                onClick={handleSubmit}
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-[#FF0000] transition"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
