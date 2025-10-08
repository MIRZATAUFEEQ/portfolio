const nodemailer = require("nodemailer");

// Create a transporter for SMTP
export const sendEmail = async (option) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
    await transporter.sendMail({
        from: `"${option.email}" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        subject: option.subject,
        text: option.text,
        replyTo: option.email
    })
}
