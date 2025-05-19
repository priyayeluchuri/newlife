const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const payload = JSON.parse(event.body);
    const formData = payload.data;

    // Create transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: '"New Life Church" <newlifekkd@gmail.com>', // Update to new account if needed (e.g., newlifechurchprayers@gmail.com)
      to: 'newlifekkd@gmail.com',
      subject: 'New Prayer Request Submission',
      text: `
        New Prayer Request:
        Name: ${formData.name}
        Prayer Request: ${formData.reason}
        Contact (Optional): ${formData.contact || 'Not provided'}
      `,
      html: `
        <h2>New Prayer Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Prayer Request:</strong> ${formData.reason}</p>
        <p><strong>Contact (Optional):</strong> ${formData.contact || 'Not provided'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
    };
  }
};
