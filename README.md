# Premium Catering Website - README

## 🎉 Welcome to Premium Catering Website

A modern, responsive catering website built with vanilla JavaScript, Tailwind CSS, and elegant animations.

## 🚀 Features

- **Single Page Application (SPA)** - Smooth navigation without page reloads
- **Responsive Design** - Mobile-first approach, works on all devices
- **Dynamic Menu Filtering** - Filter catering packages by category
- **Image Lightbox Gallery** - Full-screen image viewing with keyboard navigation
- **WhatsApp Integration** - Direct messaging for quick inquiries
- **Contact Form** - EmailJS-ready form submission
- **Smooth Animations** - Scroll effects and micro-interactions
- **SEO Optimized** - Meta tags and semantic HTML

## 📁 Project Structure

```
CatheringManagement/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Custom CSS styles
├── js/
│   ├── data.js            # Menu items, testimonials, gallery data
│   ├── components.js      # Reusable UI components
│   ├── router.js          # SPA routing and page templates
│   └── app.js             # Main application logic
├── images/                # Image assets
│   └── placeholder.svg    # Placeholder template
└── README.md              # This file
```

## 🎯 Getting Started

### Option 1: Simple HTTP Server (Recommended)

1. Open the project folder in your terminal
2. Run a simple HTTP server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

**Using Node.js (if installed):**
```bash
npx http-server -p 8000
```

3. Open your browser and navigate to `http://localhost:8000`

### Option 2: Open Directly in Browser

Simply double-click `index.html` to open it in your default browser.

**Note:** Some features may not work properly due to CORS restrictions when opening directly. Using a local server is recommended.

## 🎨 Customization Guide

### 1. Update WhatsApp Number

Find and replace `6281234567890` with your WhatsApp number (with country code) in:
- `index.html` (navigation bar and footer)
- `js/components.js` (openOrderForm function)

### 2. Update Contact Information

Edit the contact details in `js/router.js` in the `contact` page template:
- Phone number
- Email address
- Physical address
- Business hours

### 3. Replace Placeholder Images

The site currently uses placeholder images from `via.placeholder.com`. To add your own images:

1. Add your images to the `images/` folder
2. Update the image paths in `js/data.js`:
   - `menuItems` array (menu photos)
   - `testimonials` array (customer photos)
   - `galleryImages` array (gallery photos)
   - `teamMembers` array (team photos)

### 4. Configure EmailJS (Contact Form)

To enable the contact form:

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service and template
3. Update `js/components.js` in the `submitContactForm` function:

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
    .then(() => {
        alert('Terima kasih! Pesan Anda telah terkirim.');
        form.reset();
    })
    .catch((error) => {
        alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
        console.error('Error:', error);
    });
```

4. Add EmailJS SDK to `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init('YOUR_PUBLIC_KEY');
</script>
```

### 5. Update Google Maps

In `js/router.js`, find the Google Maps embed in the contact page and update the `src` URL with your business location.

### 6. Customize Colors

The website uses a gold color scheme. To change colors, edit `tailwind.config` in `index.html`:

```javascript
colors: {
    gold: {
        light: '#F4E4C1',    // Light gold
        DEFAULT: '#D4AF37',  // Main gold
        dark: '#B8860B',     // Dark gold
    }
}
```

## 📄 Pages Overview

1. **Home** - Hero section, features, popular menu, testimonials, CTA
2. **Menu** - Filterable catalog of all catering packages
3. **About** - Company story, team members, certifications
4. **Gallery** - Image gallery with category filtering
5. **Contact** - Contact form, business info, map

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No frameworks, pure JS
- **Google Fonts** - Playfair Display & Inter
- **EmailJS** - Form submission service (optional)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Development Notes

### Adding New Menu Items

Edit `js/data.js` and add items to the `menuItems` array:

```javascript
{
    id: 13,
    name: 'New Menu Item',
    category: 'nasi-box', // or 'prasmanan', 'snack-box', 'tumpeng'
    price: 45000,
    description: 'Description here',
    image: 'images/new-item.jpg',
    popular: false,
    perPax: false // set true if price is per person
}
```

### Adding New Gallery Images

Edit `js/data.js` and add to the `galleryImages` array:

```javascript
{ 
    id: 13, 
    category: 'food', // or 'event', 'setup'
    src: 'images/gallery-new.jpg', 
    alt: 'Description' 
}
```

## 📈 Performance Optimization

- Images use lazy loading (`loading="lazy"`)
- Intersection Observer for scroll animations
- Debounced scroll events
- Minimal external dependencies
- Optimized CSS with Tailwind

## 🐛 Troubleshooting

**Images not loading:**
- Check file paths in `js/data.js`
- Ensure images are in the `images/` folder
- Use a local server instead of opening file directly

**Forms not submitting:**
- Set up EmailJS account and update credentials
- Check browser console for errors

**WhatsApp not working:**
- Verify phone number format includes country code
- Test the link in a new tab

## 📧 Support

For questions or issues, contact: info@premiumcatering.id

## 📝 License

This project is open source and available for personal and commercial use.

---

Built with ❤️ for Premium Catering
