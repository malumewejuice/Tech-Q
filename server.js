const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Contact route
app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, company, service, message } = req.body;

  try {
    // Transporter for Outlook
    let transporter = nodemailer.createTransport({
      service: 'Outlook',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // you receive it here
      subject: `New Contact Request from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Service: ${service}
        Message: ${message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error sending message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
