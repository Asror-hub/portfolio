# Hostinger Deployment Guide

This guide will help you deploy your portfolio website to Hostinger and connect it to your domain.

## Prerequisites
- Hostinger account with hosting plan
- Domain registered/transferred to Hostinger
- FTP credentials from Hostinger

## Step 1: Build Your Production Files

Run the build command to create optimized production files:

```bash
npm run build
```

This will create a `dist` folder with all your production-ready files.

## Step 2: Access Your Hostinger Hosting

### Option A: Using Hostinger File Manager (Recommended for beginners)

1. Log in to [Hostinger hPanel](https://hpanel.hostinger.com/)
2. Go to **Hosting** → Select your hosting plan
3. Click on **File Manager**
4. Navigate to `public_html` folder (this is your website's root directory)

### Option B: Using FTP/SFTP

1. Log in to Hostinger hPanel
2. Go to **Hosting** → **FTP Accounts**
3. Get your FTP credentials:
   - Hostname (usually: ftp.yourdomain.com)
   - Username
   - Password
   - Port (usually 21 for FTP, 22 for SFTP)
4. Use an FTP client like FileZilla to connect

## Step 3: Upload Your Files

### Using File Manager:
1. In `public_html` folder, delete any default files (like index.html, if present)
2. Click **Upload Files** button
3. Upload ALL files and folders from your `dist` folder
4. Make sure these files are directly in `public_html`, not in a subfolder

### Using FTP:
1. Connect to your Hostinger account via FTP
2. Navigate to the `public_html` directory
3. Delete any existing default files
4. Upload all contents from your `dist` folder directly into `public_html`

**Important:** Upload the CONTENTS of the dist folder, not the dist folder itself.

Your structure should look like:
```
public_html/
  ├── index.html
  ├── vite.svg
  ├── assets/
  │   ├── index-[hash].js
  │   ├── index-[hash].css
  │   └── [all your images]
  └── [other files]
```

## Step 4: Configure Your Domain

### If your domain is already with Hostinger:

1. Log in to Hostinger hPanel
2. Go to **Domains**
3. Find your domain and click **Manage**
4. Under **DNS/Name Servers**, ensure the domain is using Hostinger nameservers:
   - ns1.dns-parking.com
   - ns2.dns-parking.com
   (These might vary, but they should be Hostinger nameservers)

5. Go to **Hosting** → Select your hosting plan
6. Under **Domain**, click **Add Domain** if your domain isn't connected yet
7. Select "I'll use my existing domain and update my nameservers"
8. Enter your domain name
9. Click **Add Domain**

### If your domain is elsewhere:

1. Log in to your domain registrar (where you bought the domain)
2. Find DNS settings or Nameserver settings
3. Update nameservers to Hostinger's nameservers:
   - ns1.dns-parking.com
   - ns2.dns-parking.com
   (Get exact nameservers from Hostinger hPanel → Domains → Nameservers)

**Note:** DNS changes can take 24-48 hours to propagate globally.

## Step 5: Configure .htaccess for React Router

Since you're using React Router, create an `.htaccess` file in your `public_html` folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>
```

## Step 6: Enable SSL Certificate

1. In Hostinger hPanel, go to **Hosting** → Your hosting plan
2. Click on **SSL**
3. Select your domain
4. Click **Install SSL** (Hostinger provides free SSL certificates)
5. Wait a few minutes for the certificate to be installed

## Step 7: Test Your Website

1. Open your browser
2. Visit your domain: `https://yourdomain.com`
3. Test all pages and functionality
4. Check if routing works properly (React Router)
5. Test the contact form

## Troubleshooting

### Website shows 404 or default Hostinger page
- Make sure files are in `public_html`, not in a subdirectory
- Wait a few minutes and clear your browser cache
- Check if DNS has propagated: use [DNS Checker](https://dnschecker.org/)

### React Router pages show 404
- Make sure you created the `.htaccess` file
- Verify mod_rewrite is enabled (it usually is on Hostinger)

### Images not loading
- Check that all assets are in the `assets` folder
- Verify file permissions (should be 644 for files, 755 for folders)
- Clear browser cache

### Contact form not working
- Ensure your EmailJS credentials are correctly configured
- Check browser console for errors
- Verify EmailJS service is active

### SSL not working
- Wait 15-30 minutes after installation
- Clear browser cache
- Try accessing with `https://` explicitly

## Environment Variables

If you have environment variables (like EmailJS keys), make sure they're properly set:

1. Create a `.env.production` file locally with your production keys
2. These will be bundled during build time
3. Never commit sensitive keys to Git

## Continuous Deployment (Optional)

For future updates:
1. Make changes locally
2. Run `npm run build`
3. Upload only the changed files to `public_html`
4. Or automate with GitHub Actions + FTP deployment

## Domain Pointing Checklist

✅ Domain nameservers updated to Hostinger
✅ Domain added to hosting plan in hPanel
✅ DNS propagation complete (check with dnschecker.org)
✅ SSL certificate installed
✅ `.htaccess` file created for React Router
✅ All files uploaded to `public_html`

## Need Help?

- Hostinger Support: Live chat available 24/7 in hPanel
- Check DNS propagation: https://dnschecker.org/
- Check domain status: https://www.whois.com/whois/

---

**Your website should now be live at your domain!** 🚀

