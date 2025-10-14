# Backend Integration Setup Guide

This guide shows you how to integrate the contact form with different backend services.

## 🚀 Option 1: EmailJS (Recommended for Quick Setup)

### Setup Steps:
1. Go to [EmailJS.com](https://www.emailjs.com/) and create an account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Create a `.env` file in your project root:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Email Template Variables:
Use these variables in your EmailJS template:
- `{{from_name}}` - Full name
- `{{from_email}}` - Email address
- `{{message}}` - Message content
- `{{to_name}}` - Recipient name

## 📧 Option 2: Formspree (Simple Alternative)

### Setup Steps:
1. Go to [Formspree.io](https://formspree.io/) and create an account
2. Create a new form
3. Get your form endpoint URL
4. Create a `.env` file:

```env
REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

### Usage:
Change the method in Contact.jsx:
```javascript
const result = await sendContactForm(formData, 'formspree');
```

## 🛠️ Option 3: Custom Backend API

### Setup Steps:
1. Navigate to the `backend-example` folder
2. Install dependencies:
```bash
cd backend-example
npm install
```

3. Create a `.env` file:
```env
PORT=3001
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=contact@soltech.com
```

4. Start the server:
```bash
npm start
```

5. Update your frontend `.env`:
```env
REACT_APP_API_BASE_URL=http://localhost:3001/api
REACT_APP_API_KEY=your_api_key
```

### Usage:
Change the method in Contact.jsx:
```javascript
const result = await sendContactForm(formData, 'custom');
```

## 🔧 Environment Variables

Create a `.env` file in your project root with the appropriate variables:

### For EmailJS:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### For Formspree:
```env
REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

### For Custom Backend:
```env
REACT_APP_API_BASE_URL=https://your-api-domain.com/api
REACT_APP_API_KEY=your_api_key
```

## 🚀 Deployment Options

### Frontend Deployment:
- **Vercel**: `vercel --prod`
- **Netlify**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions

### Backend Deployment:
- **Heroku**: `git push heroku main`
- **Railway**: Connect your GitHub repository
- **DigitalOcean**: Use App Platform
- **AWS**: Use Elastic Beanstalk or Lambda

## 🔒 Security Considerations

1. **Rate Limiting**: Implemented in custom backend
2. **Input Validation**: Both frontend and backend
3. **CORS**: Configured for production domains
4. **Environment Variables**: Never commit sensitive data
5. **HTTPS**: Always use HTTPS in production

## 📝 Testing

Test your integration:
1. Fill out the contact form
2. Check your email for the submission
3. Verify the auto-reply is sent
4. Check console for any errors

## 🆘 Troubleshooting

### Common Issues:
1. **CORS Errors**: Check your backend CORS configuration
2. **Email Not Sending**: Verify your email credentials
3. **Environment Variables**: Ensure they're properly set
4. **Rate Limiting**: Check if you've exceeded limits

### Debug Steps:
1. Check browser console for errors
2. Check network tab for failed requests
3. Verify environment variables are loaded
4. Test with different email services





















