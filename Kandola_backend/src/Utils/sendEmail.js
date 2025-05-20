import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendEmail = async (formData) => {
  const { firstName, lastName, email, phone, comments } = formData;

  // Subject
  const subject = 'Form Submitted Successfully';

  // Email HTML content
  const html = `
    <h3>Hi ${lastName},</h3>
    <p>Thank you for submitting the form. We have received your details.</p>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Comments:</strong> ${comments || 'N/A'}</p>
    <br/>
    <p>Best regards,<br/>Your Company</p>
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
    console.log('Email sent:', info.response);
    return info;
  } catch (err) {
    console.error('Email sending failed:', err);
    throw err;
  }
};

export default sendEmail;
