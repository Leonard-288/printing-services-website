# PrintPro - Leo Design Studio

A modern, responsive printing services website built for Leo Design Studio.

## 🎨 Features

- **Homepage** - Hero section with service overview
- **Services** - Detailed printing service offerings
- **Pricing** - Transparent pricing tables
- **About** - Company story and values
- **Contact** - Quote request form
- **Responsive Design** - Mobile-friendly layout
- **Modern UI** - Premium brand aesthetic

## 📁 File Structure

```
├── index.html          # Homepage
├── services.html       # Services page
├── pricing.html        # Pricing page
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # Global styles
├── script.js           # Interactive features
├── .htaccess           # Server configuration
├── sitemap.xml         # SEO sitemap
└── robots.txt          # SEO robots
```

## 🚀 Deployment Instructions

### Option 1: Deploy on Your Own Server (Apache/Linux)

1. **Connect via SSH/FTP**
   ```bash
   sftp user@your-domain.com
   ```

2. **Upload all files** to your web root directory (usually `public_html/` or `www/`)

3. **Ensure `.htaccess` is enabled** on your server:
   - Contact your hosting provider
   - Enable mod_rewrite in Apache

4. **Set permissions:**
   ```bash
   chmod 644 *.html *.css *.js
   chmod 644 .htaccess
   ```

### Option 2: Using Git Deploy

```bash
# SSH into your server
ssh user@your-domain.com

# Navigate to web root
cd /home/user/public_html

# Clone the repository
git clone https://github.com/Leonard-288/printing-services-website.git .

# Pull updates (from server)
git pull origin main
```

## 🔗 Creating Short URLs & QR Codes

### Short URL Options:

1. **Using bit.ly:**
   - Visit https://bitly.com
   - Paste your URL: `https://leodesignstudio.com`
   - Get short link: `https://bit.ly/LeoDesignStudio`

2. **Using TinyURL:**
   - Visit https://tinyurl.com
   - Create: `https://tinyurl.com/leodesignstudio`

3. **Custom Short Link (Your Own Server):**
   - Use a URL shortener script like YOURLS
   - Host on: `https://leodesignstudio.com/p` or `https://leo.studio/p`

### QR Code Generation:

1. **Free QR Code Generators:**
   - https://qr-code-generator.com
   - https://www.qr-code-generator.com
   - https://goqr.me

2. **Generate QR for your URL:**
   - Enter: `https://leodesignstudio.com` (or short URL)
   - Download as PNG/SVG
   - Use on business cards, flyers, signage

3. **Dynamic QR Codes (track clicks):**
   - https://bitly.com (includes analytics)
   - https://www.rebrandly.com
   - https://url.xyz

## 🌐 Domain Setup

### To point "leodesignstudio.com" to your server:

1. **Update DNS Records** in your domain registrar:
   ```
   A Record: @ → your-server-ip-address
   CNAME: www → leodesignstudio.com
   ```

2. **SSL Certificate** (recommended):
   ```bash
   # If using Let's Encrypt (free)
   sudo certbot certonly --standalone -d leodesignstudio.com -d www.leodesignstudio.com
   ```

3. **Update `.htaccess`** for HTTPS redirect:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

## 📊 Analytics & Tracking

Add Google Analytics to track visits:

1. Go to https://analytics.google.com
2. Create property for `leodesignstudio.com`
3. Copy tracking ID and add to each HTML page before `</head>`

## 📱 Social Sharing Links

Use these to share your site:

```
Facebook: https://www.facebook.com/sharer/sharer.php?u=https://leodesignstudio.com
Twitter: https://twitter.com/intent/tweet?url=https://leodesignstudio.com
LinkedIn: https://www.linkedin.com/sharing/share-offsite/?url=https://leodesignstudio.com
WhatsApp: https://wa.me/?text=Check%20out%20Leo%20Design%20Studio%20-%20https://leodesignstudio.com
```

## 🔧 Customization

### Update Company Info
Edit these files with your details:
- `index.html` - Contact info, address, phone, email
- `about.html` - Company story
- All pages - Update phone/email in footer

### Change Colors
Edit `styles.css` CSS variables:
```css
:root {
  --accent: #dc6f2a;        /* Orange accent
  --accent-deep: #bf5214;    /* Darker orange
  --ink: #171717;            /* Dark text
}
```

## 📧 Contact Form Setup

To make the contact form functional:

1. **Using FormSubmit.co (free):**
   - Change form action in `contact.html`:
   ```html
   <form action="https://formsubmit.co/your-email@gmail.com" method="POST">
   ```

2. **Using Netlify Forms:**
   - Add `netlify` attribute to form
   - Deploy on Netlify instead

3. **Using PHP (your own server):**
   - Create `send-email.php`
   - Update form action to point to PHP script

## 🎯 Tips for Maximum Traffic

1. **Share the QR code** on:
   - Business cards
   - Flyers
   - Vehicle wraps
   - Social media
   - Email signatures

2. **Use short URL** in:
   - Print materials
   - Marketing campaigns
   - Word-of-mouth
   - Email newsletters

3. **Monitor traffic:**
   - Set up Google Analytics
   - Track which links convert best
   - Optimize based on data

## 📝 License

This website is custom-built for Leo Design Studio.

---

**Questions?** Contact: hello@leodesignstudio.com
