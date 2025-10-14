// EmailJS Configuration with proper environment variable handling
const getEnvVar = (key, fallback) => {
  // Try different ways to access environment variables
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key];
  }
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key];
  }
  if (typeof window !== 'undefined' && window.env && window.env[key]) {
    return window.env[key];
  }
  return fallback;
};

export const emailConfig = {
  serviceId: getEnvVar('REACT_APP_EMAILJS_SERVICE_ID', 'service_soltech'),
  templateId: getEnvVar('REACT_APP_EMAILJS_TEMPLATE_ID', 'template_contact_form'),
  publicKey: getEnvVar('REACT_APP_EMAILJS_PUBLIC_KEY', 'your_public_key_here'),
  contactEmail: getEnvVar('REACT_APP_CONTACT_EMAIL', 'asrorodilov@email.com'),
};

// Fallback configuration for immediate testing
export const fallbackConfig = {
  serviceId: 'service_soltech',
  templateId: 'template_contact_form', 
  publicKey: 'your_public_key_here',
  contactEmail: 'asrorodilov@email.com',
};

// Debug function to check environment variables
export const debugEnvVars = () => {
  console.log('Environment Variables Debug:');
  console.log('process.env:', typeof process !== 'undefined' ? process.env : 'undefined');
  console.log('import.meta.env:', typeof import.meta !== 'undefined' ? import.meta.env : 'undefined');
  console.log('window.env:', typeof window !== 'undefined' ? window.env : 'undefined');
  console.log('EmailJS Config:', emailConfig);
};