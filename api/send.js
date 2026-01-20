import { Resend } from 'resend';
import process from 'node:process';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Use process.env directly with the imported process object
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('RESEND_API_KEY is missing from environment variables');
    return res.status(500).json({ error: 'Internal server error: API configuration missing' });
  }

  const resend = new Resend(apiKey);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['sksahu2083@gmail.com'], // The email address linked to the Resend account
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                line-height: 1.6; 
                color: #ffffff; 
                background-color: #0f172a;
                margin: 0;
                padding: 0;
              }
              .wrapper {
                background-color: #0f172a;
                padding: 40px 20px;
              }
              .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background: #1e293b; 
                border-radius: 20px; 
                overflow: hidden;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
              }
              .header { 
                background: linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%); 
                color: white; 
                padding: 40px 20px; 
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
                letter-spacing: 2px;
                text-transform: uppercase;
              }
              .header p {
                margin: 10px 0 0;
                opacity: 0.9;
                font-size: 14px;
              }
              .content { 
                padding: 40px 30px; 
              }
              .title {
                font-size: 22px;
                font-weight: bold;
                margin-bottom: 25px;
                color: #f8fafc;
                text-align: center;
              }
              .field { 
                margin-bottom: 20px; 
              }
              .label { 
                font-weight: 600; 
                color: #94a3b8; 
                display: block; 
                margin-bottom: 8px;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
              }
              .value { 
                color: #f1f5f9;
                font-size: 16px;
              }
              .message-box {
                margin-top: 30px;
                padding: 25px;
                border: 2px dashed #3b82f6;
                border-radius: 15px;
                background: rgba(59, 130, 246, 0.05);
              }
              .footer { 
                text-align: center; 
                padding: 30px; 
                font-size: 12px; 
                color: #64748b; 
              }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="container">
                <div class="header">
                  <h1>Portfolio</h1>
                  <p>Inquiry from your website</p>
                </div>
                <div class="content">
                  <div class="title">New Message Received</div>
                  
                  <div class="field">
                    <span class="label">From</span>
                    <div class="value"><strong>${name}</strong> (${email})</div>
                  </div>

                  <div class="message-box">
                    <span class="label">Message Content</span>
                    <div class="value" style="white-space: pre-wrap; line-height: 1.8;">${message}</div>
                  </div>
                </div>
                <div class="footer">
                  This message was sent via your portfolio contact form.<br>
                  &copy; ${new Date().getFullYear()} Sai Krishna Sahu
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error: error.message || 'Resend error occurred' });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error('Server Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
