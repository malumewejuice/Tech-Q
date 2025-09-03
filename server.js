const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000; // you can change this if needed

// Middleware
app.use(cors()); // allow requests from frontend
app.use(bodyParser.json()); // parse incoming JSON

// Route to handle contact form
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Transporter config for Outlook
  let transporter = nodemailer.createTransport({
    service: "hotmail", // Outlook/Hotmail
    auth: {
      user: "techqho@outlook.com", // replace with your email
      pass: "cunokugbeqccdbau", // or App Password if 2FA is enabled
    },
  });

  let mailOptions = {
    from: email,
    to: "techqho@outlook.com", // where you want to receive messages
    subject: `New Contact Form Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

