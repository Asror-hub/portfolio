// Test EmailJS Credentials
// Run this in your browser console to test your credentials

const testEmailCredentials = async () => {
  console.log('🧪 Testing EmailJS Credentials...');
  
  // Import your credentials (you'll need to update these)
  const credentials = {
    serviceId: 'service_soltech', // ← Update with your actual service ID
    templateId: 'template_contact_form', // ← Update with your actual template ID
    publicKey: 'your_public_key_here', // ← Update with your actual public key
  };
  
  console.log('📋 Current Credentials:', credentials);
  
  // Test parameters
  const templateParams = {
    from_name: 'Test User',
    from_email: 'test@example.com',
    message: 'This is a test message from the contact form.',
    to_name: 'SOLTECH Team',
    reply_to: 'test@example.com',
    to_email: 'asrorodilov@email.com',
    company_name: 'SOLTECH',
    website: 'https://soltech.com',
    current_date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  };
  
  try {
    console.log('📤 Sending test email...');
    
    // Import emailjs (make sure it's available)
    const emailjs = window.emailjs || (await import('@emailjs/browser')).default;
    
    const result = await emailjs.send(
      credentials.serviceId,
      credentials.templateId,
      templateParams,
      credentials.publicKey
    );
    
    console.log('✅ Email sent successfully!', result);
    console.log('📧 Check your email: asrorodilov@email.com');
    
  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    if (error.text && error.text.includes('Public Key is invalid')) {
      console.log('🔧 Fix: Update your Public Key in emailCredentials.js');
    } else if (error.text && error.text.includes('Service ID')) {
      console.log('🔧 Fix: Update your Service ID in emailCredentials.js');
    } else if (error.text && error.text.includes('Template ID')) {
      console.log('🔧 Fix: Update your Template ID in emailCredentials.js');
    }
  }
};

// Instructions:
console.log('📝 Instructions:');
console.log('1. Update the credentials in this file with your actual EmailJS values');
console.log('2. Run: testEmailCredentials()');
console.log('3. Check the console for results');

// Export for use
window.testEmailCredentials = testEmailCredentials;





















