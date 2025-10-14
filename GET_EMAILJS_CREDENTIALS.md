# Get Your EmailJS Credentials - Step by Step

## 🎯 You're Almost There!

The error shows EmailJS is working, you just need the correct credentials. Follow these steps:

## 📋 Step 1: Get Your Public Key

1. **Go to**: [https://dashboard.emailjs.com/admin/account](https://dashboard.emailjs.com/admin/account)
2. **Look for "Public Key" section**
3. **Copy your Public Key** (starts with `user_`)

## 📋 Step 2: Get Your Service ID

1. **Go to**: [https://dashboard.emailjs.com/admin/integration](https://dashboard.emailjs.com/admin/integration)
2. **Click on "Email Services"** in the left sidebar
3. **Find your Gmail service**
4. **Copy the Service ID** (starts with `service_`)

## 📋 Step 3: Get Your Template ID

1. **Go to**: [https://dashboard.emailjs.com/admin/integration](https://dashboard.emailjs.com/admin/integration)
2. **Click on "Email Templates"** in the left sidebar
3. **Find your "Contact Us" template**
4. **Copy the Template ID** (starts with `template_`)

## 🔧 Step 4: Update Your Credentials

Open `src/config/emailCredentials.js` and replace the values:

```javascript
export const emailCredentials = {
  serviceId: 'YOUR_ACTUAL_SERVICE_ID',        // ← Replace this
  templateId: 'YOUR_ACTUAL_TEMPLATE_ID',     // ← Replace this
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY',       // ← Replace this
  contactEmail: 'asrorodilov@email.com'
};
```

## 🧪 Step 5: Test Your Form

1. **Save the file**
2. **Restart your development server**: `npm start`
3. **Go to your contact form**
4. **Fill out and submit the form**
5. **Check your email!**

## 📧 Example of What Your Credentials Should Look Like:

```javascript
export const emailCredentials = {
  serviceId: 'service_abc123def',           // ← Your actual service ID
  templateId: 'template_xyz789ghi',        // ← Your actual template ID
  publicKey: 'user_abc123def456ghi789',    // ← Your actual public key
  contactEmail: 'asrorodilov@email.com'
};
```

## 🆘 Still Having Issues?

### Check These Common Issues:

1. **Service ID**: Make sure it starts with `service_`
2. **Template ID**: Make sure it starts with `template_`
3. **Public Key**: Make sure it starts with `user_`
4. **Gmail Service**: Make sure your Gmail service is active
5. **Template**: Make sure your template is published

### Debug Steps:

1. **Check browser console** for any other errors
2. **Verify credentials** are exactly as shown in EmailJS dashboard
3. **Test template** from EmailJS dashboard first
4. **Check Gmail service** is properly connected

## ✅ Success!

Once you update the credentials correctly, your contact form will work perfectly and send emails to `asrorodilov@email.com`!

---

**Need help?** The EmailJS dashboard has a "Test It" button to test your template before using it in your form.





















