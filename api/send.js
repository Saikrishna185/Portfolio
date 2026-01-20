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
      to: ['sksahu.aug03@gmail.com'], // The user's email from ContactSection.jsx
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; }
              .header { background: #6366f1; color: white; padding: 10px 20px; border-radius: 10px 10px 0 0; }
              .content { padding: 20px; background: #f9fafb; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #6366f1; display: block; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 5px; border: 1px solid #e5e7eb; }
              .footer { text-align: center; margin-top: 20px; font-size: 0.8em; color: #6b7280; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Portfolio Message</h2>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name</span>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <span class="label">Email</span>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <span class="label">Message</span>
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
              </div>
              <div class="footer">
                This message was sent via your portfolio contact form.
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
