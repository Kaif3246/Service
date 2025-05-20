import ServiceForm from '../../model/serviceForm/serviceForm.model.js';
import sendEmail from '../../Utils/SendServiceEmail.js';

export const submitServiceForm = async (req, res) => {
  try {
    const {
      goal,
      fundingAmount,
      timeline,
      investment,
      inquiryType,
      firstName,
      lastName,
      phone,
      email,
    } = req.body;

    // Basic validation
    if (
      !goal ||
      !fundingAmount ||
      !timeline ||
      !investment ||
      !inquiryType ||
      !firstName ||
      !lastName ||
      !phone ||
      !email
    ) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    // Save to DB
    const newForm = new ServiceForm({
      goal,
      fundingAmount,
      timeline,
      investment,
      inquiryType,
      firstName,
      lastName,
      phone,
      email,
    });

    const savedForm = await newForm.save();

    // Send confirmation email
    await sendEmail({
      goal,
      fundingAmount,
      timeline,
      investment,
      inquiryType,
      firstName,
      lastName,
      phone,
      email,
    });

    res.status(201).json({
      message: 'Service form submitted successfully and email sent.',
      data: savedForm,
    });

  } catch (error) {
    console.error('Error in submitServiceForm:', error);
    res.status(500).json({
      message: 'Server error. Could not submit service form or send email.',
    });
  }
};
