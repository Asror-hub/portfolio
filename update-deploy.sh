#!/bin/bash

echo "🚀 Building portfolio for production..."
npm run build

echo "📦 Build complete! Files ready in 'build' folder"
echo ""
echo "📋 Next steps:"
echo "1. Go to Hostinger File Manager"
echo "2. Navigate to public_html"
echo "3. Upload all files from the 'build' folder"
echo "4. Make sure .htaccess file is included"
echo ""
echo "✅ Your website will be updated!"
