import mongoose from 'mongoose'

const serviceFormSchema = new mongoose.Schema({
  goal: {
    type: String,
    required: true,
  },
  fundingAmount: {
    type: String,
    required: true,
  },
  timeline: {
    type: String,
    required: true,
  },
  investment: {
    type: String,
    required: true,
  },
  inquiryType: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const ServiceForm = mongoose.model('ServiceForm', serviceFormSchema);
export default ServiceForm
