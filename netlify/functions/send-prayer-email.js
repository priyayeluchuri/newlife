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
       // Netlify Forms sends payload.data with form fields
       const formData = payload.data || payload;

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
         from: '"New Life Church" <newlifekkd@gmail.com>',
         to: 'newlifekkd@gmail.com',
         subject: 'New Prayer Request Submission',
         text: `
           New Prayer Request:
           Name: ${formData.name || 'Unknown'}
           Prayer Request: ${formData.reason || 'None'}
           Contact (Optional): ${formData.contact || 'Not provided'}
         `,
         html: `
           <h2>New Prayer Request</h2>
           <p><strong>Name:</strong> ${formData.name || 'Unknown'}</p>
           <p><strong>Prayer Request:</strong> ${formData.reason || 'None'}</p>
           <p><strong>Contact (Optional):</strong> ${formData.contact || 'Not provided'}</p>
         `,
       };

       // Send email
       await transporter.sendMail(mailOptions);
       
       return {
         statusCode: 200,
         body: JSON.stringify({ message: 'Email sent successfully' }),
       };
	     console.log('Received payload:', event.body);
     } catch (error) {
       console.error('Error sending email:', error);
       return {
         statusCode: 500,
         body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
       };
     }
   };
