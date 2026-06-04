import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  console.log("=== CONTACT API CALLED ===");
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);
  
  try {
    // Get form data from request body
    const { name, email, subject, message } = await request.json();

    console.log("Form data:", { name, email, subject });

    // Validate all fields are present
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Verify transporter connection
    await transporter.verify();
    console.log("Transporter verified successfully!");

    // Email content to be sent to you (Formal - No emojis)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'janidhruv2504@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f7fb;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: #0066FF; padding: 25px 30px;">
              <h2 style="margin: 0; color: white; font-size: 24px;">New Contact Form Submission</h2>
              <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.8);">From your portfolio website</p>
            </div>
            
            <!-- Body -->
            <div style="padding: 30px;">
              <!-- Name -->
              <div style="margin-bottom: 20px;">
                <strong style="color: #374151;">Name:</strong>
                <p style="margin: 5px 0 0 0; color: #4b5563;">${name}</p>
              </div>
              
              <!-- Email -->
              <div style="margin-bottom: 20px;">
                <strong style="color: #374151;">Email:</strong>
                <p style="margin: 5px 0 0 0; color: #4b5563;">
                  <a href="mailto:${email}" style="color: #0066FF;">${email}</a>
                </p>
              </div>
              
              <!-- Subject -->
              <div style="margin-bottom: 20px;">
                <strong style="color: #374151;">Subject:</strong>
                <p style="margin: 5px 0 0 0; color: #4b5563; background: #f3f4f6; padding: 8px 12px; border-radius: 8px;">${subject}</p>
              </div>
              
              <!-- Message -->
              <div style="margin-bottom: 20px;">
                <strong style="color: #374151;">Message:</strong>
                <div style="margin-top: 5px; background: #f9fafb; padding: 15px; border-radius: 8px; border-left: 3px solid #0066FF;">
                  <p style="margin: 0; color: #4b5563; white-space: pre-wrap;">${message.replace(/\n/g, '<br/>')}</p>
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: #f9fafb; padding: 15px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">Sent from Dhruv Jani's Portfolio Website</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Formal auto-reply to the person who contacted you (No emojis)
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for reaching out - Dhruv Jani`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thank You</title>
        </head>
        <body style="font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f7fb;">
          <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            
            <div style="background: #0066FF; padding: 25px 30px; text-align: center;">
              <h2 style="margin: 0; color: white; font-size: 24px;">Thank You for Contacting Me</h2>
            </div>
            
            <div style="padding: 30px;">
              <p style="font-size: 16px; color: #374151; margin-bottom: 15px;">Dear ${name},</p>
              
              <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
                Thank you for reaching out to me. I have received your message and will review it shortly.
              </p>
              
              <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
                I will get back to you within 24 hours. If your matter is urgent, please feel free to connect with me on LinkedIn or GitHub.
              </p>
              
              <div style="margin: 25px 0; padding: 15px; background: #f3f4f6; border-radius: 8px;">
                <p style="margin: 0 0 10px 0; color: #374151; font-weight: 600;">Connect with me:</p>
                <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                  <a href="https://github.com/janidhruv25" style="display: inline-block; padding: 8px 16px; background: #1f2937; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">GitHub</a>
                  <a href="https://www.linkedin.com/in/janidhruv25/" style="display: inline-block; padding: 8px 16px; background: #0077b5; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">LinkedIn</a>
                </div>
              </div>
              
              <p style="color: #4b5563; line-height: 1.6; margin-bottom: 10px;">
                Best regards,
              </p>
              <p style="color: #374151; font-weight: 600; margin: 0;">
                Dhruv Jani
              </p>
              <p style="color: #6b7280; font-size: 14px; margin: 5px 0 0 0;">
                Embedded Systems Engineer
              </p>
            </div>
            
            <div style="background: #f9fafb; padding: 15px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                This is an automated response. Please do not reply directly to this email.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    const result = await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    console.log("Email sent:", result[0].messageId);
    
    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}