import Form from '../../model/form/form1.js'

import sendEmail from '../../Utils/sendEmail.js';

export const submitForm = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, comments } = req.body;

    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    const newForm = new Form({ firstName, lastName, email, phone, comments });
    const savedForm = await newForm.save();

    // Send email using full formData
    await sendEmail({ firstName, lastName, email, phone, comments });

    res.status(201).json({
      message: 'Form submitted and confirmation email sent.',
      data: savedForm
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error. Could not submit form or send email.' });
  }
};
