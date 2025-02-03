import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
async function sendEmail(to, subject, text) {
    
    const transporter = createTransport({
        service: "gmail",
        auth: {
            user:process.env.SENDER_EMAIL, // Replace with your email
            pass: process.env.SENDER_PASSWORD, // Replace with your email password or app password
        },
    });

    const mailOptions = {
        from:process.env.SENDER_EMAIL,
        to,
        subject,
        text,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

export default sendEmail;