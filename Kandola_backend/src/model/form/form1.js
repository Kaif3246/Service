import mongoose from 'mongoose'

const formSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  comments: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

const Form = mongoose.model('form', formSchema);

export default Form
