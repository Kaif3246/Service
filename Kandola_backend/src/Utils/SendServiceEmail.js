import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendServiceFormEmail = async (formData) => {
  const {
    goal,
    fundingAmount,
    timeline,
    investment,
    inquiryType,
    firstName,
    lastName,
    phone,
    email
  } = formData;

  const subject = 'Service Form Submitted Successfully';

  const html = `
    <h3>Hi ${lastName},</h3>
    <p>Thank you for submitting your service inquiry. We've received the following information:</p>
    <ul>
      <li><strong>Goal:</strong> ${goal}</li>
      <li><strong>Funding Amount:</strong> ${fundingAmount}</li>
      <li><strong>Timeline:</strong> ${timeline}</li>
      <li><strong>Investment Capacity:</strong> ${investment}</li>
      <li><strong>Inquiry Type:</strong> ${inquiryType}</li>
      <li><strong>Name:</strong> ${firstName} ${lastName}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Phone:</strong> ${phone}</li>
    </ul>
    <br/>
    <p>We will contact you shortly regarding the next steps.</p>
    <p>Best regards,<br/>Kandola Enterprises Team</p>
    <br/>
     <h1>We will contact you soon</h1>
    
  `;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Kandola Enterprises" <${process.env.EMAIL_USER}>`,
      to: email,
      subject,
      html
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Service Form Email sent:', info.response);
    return info;
  } catch (err) {
    console.error('Failed to send Service Form email:', err);
    throw err;
  }
};

export default sendServiceFormEmail;
