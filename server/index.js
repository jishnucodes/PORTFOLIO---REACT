import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import cors from 'cors';
import transporter from './config/mailerTransporter.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



// Handle sending emails from frontend form
app.post('/send-email', async (req, res) => {
  const { name, email, subject, info } = req.body;

  const mailOptions = {
    from: `${name} <${email}`, 
    to: process.env.EMAIL_ID, // Set the recipient email
    subject: subject,
    text: info,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
