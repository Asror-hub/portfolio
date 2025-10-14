import { emailConfig, formspreeConfig, apiConfig } from '../config/emailConfig';

// EmailJS Integration
export const sendEmailWithEmailJS = async (formData) => {
  const { serviceId, templateId, publicKey, contactEmail } = emailConfig;
  
  const templateParams = {
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    message: formData.message,
    to_name: 'SOLTECH Team',
    reply_to: formData.email,
    to_email: contactEmail,
    company_name: 'SOLTECH',
    website: 'https://soltech.com',
  };
  
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: templateParams,
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to send email');
  }
  
  return response.json();
};

// Formspree Integration
export const sendEmailWithFormspree = async (formData) => {
  const { endpoint } = formspreeConfig;
  
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      message: formData.message,
      _subject: 'New Contact Form Submission - SOLTECH',
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to send email');
  }
  
  return response.json();
};

// Custom Backend API Integration
export const sendEmailWithCustomAPI = async (formData) => {
  const { baseUrl, apiKey } = apiConfig;
  
  const response = await fetch(`${baseUrl}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString(),
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to send email');
  }
  
  return response.json();
};

// Main function that tries different methods
export const sendContactForm = async (formData, method = 'emailjs') => {
  try {
    switch (method) {
      case 'emailjs':
        return await sendEmailWithEmailJS(formData);
      case 'formspree':
        return await sendEmailWithFormspree(formData);
      case 'custom':
        return await sendEmailWithCustomAPI(formData);
      default:
        throw new Error('Invalid method specified');
    }
  } catch (error) {
    console.error(`Error sending email with ${method}:`, error);
    throw error;
  }
};
