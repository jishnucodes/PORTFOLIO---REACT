import nodemailer from 'nodemailer'
import 'dotenv/config'


const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.APP_PASSWORD,
    }
})

export default transporter;