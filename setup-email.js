#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 SOLTECH Contact Form Setup');
console.log('==============================\n');

// Check if .env file exists
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, '.env.example');

if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env file...');
  
  const envContent = `# EmailJS Configuration
# Get these values from https://www.emailjs.com/
REACT_APP_EMAILJS_SERVICE_ID=service_soltech
REACT_APP_EMAILJS_TEMPLATE_ID=template_contact_form
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here

# Contact Email
REACT_APP_CONTACT_EMAIL=asrorodilov@email.com
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file created successfully!\n');
} else {
  console.log('✅ .env file already exists\n');
}

console.log('📋 Next Steps:');
console.log('1. Go to https://www.emailjs.com/ and create an account');
console.log('2. Add Gmail service and connect asrorodilov@email.com');
console.log('3. Create email template with ID: template_contact_form');
console.log('4. Get your Public Key from Account → General');
console.log('5. Update the .env file with your actual credentials');
console.log('6. Run: npm start');
console.log('7. Test the contact form!\n');

console.log('📧 Email Template Variables:');
console.log('- {{from_name}} - Full name from form');
console.log('- {{from_email}} - Email from form');
console.log('- {{message}} - Message content');
console.log('- {{to_name}} - "SOLTECH Team"');
console.log('- {{to_email}} - asrorodilov@email.com');
console.log('- {{company_name}} - "SOLTECH"');
console.log('- {{website}} - "https://soltech.com"');
console.log('- {{current_date}} - Current date\n');

console.log('📖 For detailed setup instructions, see: EMAILJS_SETUP.md');
console.log('🎉 Your contact form is ready to be configured!');





















