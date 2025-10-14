# EmailJS Professional Setup for SOLTECH

## 🚀 Quick Setup Guide

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or your preferred email provider
4. Connect your Gmail account (asrorodilov@email.com)
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this professional template:

#### Template ID: `template_contact_form`
#### Subject: `New Contact Form Submission - {{company_name}}`

#### HTML Template:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #6366f1, #22c55e); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #6366f1; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #22c55e; }
        .message { white-space: pre-wrap; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 New Contact Form Submission</h1>
            <p>You have received a new message through your SOLTECH website contact form.</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">{{from_name}}</div>
            </div>
            <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">{{from_email}}</div>
            </div>
            <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value message">{{message}}</div>
            </div>
            <div class="field">
                <div class="label">🌐 Website:</div>
                <div class="value">{{website}}</div>
            </div>
            <div class="field">
                <div class="label">📅 Date:</div>
                <div class="value">{{current_date}}</div>
            </div>
        </div>
        <div class="footer">
            <p>This email was sent from your SOLTECH website contact form.</p>
            <p>Reply directly to this email to respond to {{from_name}}.</p>
        </div>
    </div>
</body>
</html>
```

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `user_abc123def456`)

### Step 5: Update Environment Variables
Create a `.env` file in your project root:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=template_contact_form
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_CONTACT_EMAIL=asrorodilov@email.com
```

### Step 6: Test the Integration
1. Start your development server: `npm start`
2. Go to the contact form on your website
3. Fill out and submit the form
4. Check your email (asrorodilov@email.com) for the submission

## 📧 Email Template Variables

The template uses these variables:
- `{{from_name}}` - Full name from form
- `{{from_email}}` - Email from form
- `{{message}}` - Message content
- `{{to_name}}` - "SOLTECH Team"
- `{{to_email}}` - asrorodilov@email.com
- `{{company_name}}` - "SOLTECH"
- `{{website}}` - "https://soltech.com"
- `{{current_date}}` - Current date (auto-generated)

## 🔧 Advanced Configuration

### Auto-Reply Template (Optional)
Create a second template for auto-reply to users:

#### Template ID: `template_auto_reply`
#### Subject: `Thank you for contacting {{company_name}}`

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Thank you for contacting SOLTECH</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #6366f1, #22c55e); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
        .cta { background: #6366f1; color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Thank You for Contacting SOLTECH!</h1>
        </div>
        <div class="content">
            <p>Hi {{from_name}},</p>
            <p>Thank you for reaching out to us! We have received your message and our team will review it carefully.</p>
            <p>We typically respond to all inquiries within 24 hours during business days.</p>
            <div class="cta">
                <h3>What's Next?</h3>
                <p>Our team will review your message and get back to you with detailed information about our services and how we can help with your project.</p>
            </div>
            <p>In the meantime, feel free to explore our website to learn more about our services:</p>
            <ul>
                <li>Custom Software Development</li>
                <li>Mobile App Development</li>
                <li>Web App Development</li>
                <li>AI Development Solutions</li>
            </ul>
            <p>Best regards,<br><strong>The SOLTECH Team</strong></p>
        </div>
        <div class="footer">
            <p>This is an automated response. Please do not reply to this email.</p>
            <p>If you have urgent questions, please call us at +1 (555) 123-4567</p>
        </div>
    </div>
</body>
</html>
```

## 🚀 Production Deployment

### Environment Variables for Production:
```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_contact_form
REACT_APP_EMAILJS_PUBLIC_KEY=user_abc123def456
REACT_APP_CONTACT_EMAIL=asrorodilov@email.com
```

### Security Notes:
- Never commit your `.env` file to version control
- Use environment variables in your deployment platform
- Consider upgrading to EmailJS Pro for higher limits
- Monitor your email usage in the EmailJS dashboard

## 📊 Monitoring & Analytics

EmailJS provides:
- Email delivery tracking
- Usage statistics
- Error monitoring
- Template performance

Check your EmailJS dashboard regularly to monitor form submissions and email delivery.
