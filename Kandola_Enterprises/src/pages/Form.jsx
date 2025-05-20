import React, { useState } from 'react';
import axios from 'axios';

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
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => Math.max(1, prev - 1));

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/serviceForm/submit-service-form', formData);
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
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Something went wrong. Please try again.');
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
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 text-[#1a1a1a] font-sans">
      <div className="w-full max-w-4xl border-t-4 border-black rounded-md shadow-md px-10 py-12">
        <p className="text-sm font-semibold text-black mb-2">Step {step}/3</p>
        <div className="w-full bg-[#f5f3ee] h-2 rounded mb-8">
          <div
            className="h-2 bg-black rounded transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        {/* STEP 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Goal/Timeline</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">What's your goal?*</label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                disabled={step < 1}
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
                disabled={step < 1}
                className="w-full border border-[#ccc] rounded px-4 py-3 mb-4"
              />
            </div>
          </div>
          {step === 1 && formData.goal && formData.fundingAmount && (
            <div className="text-right mb-8">
              <button
                onClick={nextStep}
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-[#00465b]"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* STEP 2 */}
        {step >= 2 && (
          <div>
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
            {step === 2 && formData.timeline && formData.investment && (
              <div className="flex justify-between mt-4 mb-8">
                <button
                  onClick={prevStep}
                  className="bg-gray-300 text-[#1a1a1a] px-6 py-3 rounded-md hover:bg-gray-400"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-black text-white px-6 py-3 rounded-md hover:bg-[#00465b]"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}

        {/* STEP 3 */}
        {step >= 3 && (
          <div>
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
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-[#ccc] rounded px-4 py-3 mb-4"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-[#ccc] rounded px-4 py-3 mb-4"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Phone*"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-[#ccc] rounded px-4 py-3 mb-4"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[#ccc] rounded px-4 py-3 mb-4"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={prevStep}
                className="bg-gray-300 text-[#1a1a1a] px-6 py-3 rounded-md hover:bg-gray-400"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-[#00465b]"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
