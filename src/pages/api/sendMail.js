import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
    const { email, subject, message } = req.body;

    // Create a transporter using SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        auth: {
            user: 'your_username',
            pass: 'your_password',
        },
    });

    // Send the email
    try {
        const info = await transporter.sendMail({
            from: `"${email}" <${email}>`,
            to: 'richard@richardcool.com',
            subject: subject,
            text: message,
        });

        console.log('Message sent: %s', info.messageId);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error sending email' });
    }
}
