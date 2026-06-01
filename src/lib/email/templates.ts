import { html } from 'satori-html';

export const welcomeEmailTemplate = (userEmail: string, userName: string) => {
  return html(`
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #2563eb; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Welcome to BuildNext!</h1>
      </div>
      
      <div style="padding: 20px; background-color: #f9fafb;">
        <h2>Hi ${userName},</h2>
        <p>Thank you for joining BuildNext! 🎉</p>
        
        <p>We're excited to have you as part of our community. With BuildNext, you can:</p>
        
        <ul>
          <li>Generate unlimited project ideas tailored to your skills</li>
          <li>Get personalized learning paths</li>
          <li>Receive 30-day build plans</li>
          <li>Analyze portfolio and startup potential</li>
        </ul>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://buildnext.app/generator" 
             style="background-color: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Start Generating Ideas
          </a>
        </div>
        
        <p>If you have any questions, feel free to reach out to support@buildnext.app</p>
        
        <p>Happy building!<br>The BuildNext Team</p>
      </div>
      
      <div style="background-color: #e5e7eb; padding: 20px; text-align: center; font-size: 12px; color: #666;">
        <p>© 2024 BuildNext. All rights reserved.</p>
      </div>
    </div>
  `);
};

export const passwordResetEmailTemplate = (resetLink: string, userName: string) => {
  return html(`
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #2563eb; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Reset Your Password</h1>
      </div>
      
      <div style="padding: 20px; background-color: #f9fafb;">
        <h2>Hi ${userName},</h2>
        <p>We received a request to reset your password. Click the button below to reset it:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetLink}" 
             style="background-color: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Reset Password
          </a>
        </div>
        
        <p>If you didn't request this, please ignore this email.</p>
        <p>This link expires in 24 hours.</p>
      </div>
    </div>
  `);
};

export const invoiceEmailTemplate = (invoiceNumber: string, amount: number, dueDate: string) => {
  return html(`
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #2563eb; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Invoice ${invoiceNumber}</h1>
      </div>
      
      <div style="padding: 20px; background-color: #f9fafb;">
        <p>Your BuildNext invoice is ready!</p>
        
        <div style="border: 1px solid #ddd; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Amount Due:</strong> $${(amount / 100).toFixed(2)}</p>
          <p><strong>Due Date:</strong> ${dueDate}</p>
          <p><strong>Invoice Number:</strong> ${invoiceNumber}</p>
        </div>
        
        <p>Thank you for your continued subscription to BuildNext!</p>
      </div>
    </div>
  `);
};
