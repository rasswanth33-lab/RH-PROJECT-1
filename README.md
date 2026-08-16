# SEEABLE HOARDINGS — Premium Landing Page

A premium, cinematic one-page landing site built with:
- **Typography-first hero** (no image dependency)
- **Smooth scroll animations** and parallax effects
- **Editorial, asymmetric layouts**
- **Premium UI/UX design** focused on brand presence

## Quick Start

1. Open `index.html` in a browser (double-click or use Live Server in VS Code).
2. Visit **http://localhost:8000** to view live.

## Design Features

✅ **Hero Section** — Pure typography + animated gradients (no images)  
✅ **Smooth Animations** — Scroll-triggered reveals and parallax  
✅ **Glass Navigation** — Transparent navbar with premium styling  
✅ **Editorial Layouts** — Asymmetric grids and gallery  
✅ **Premium Color Palette** — Blacks, whites, and gold accents  
✅ **Fully Responsive** — Desktop, tablet, mobile optimized  

## Image Placeholders

The following sections have image placeholders ready for billboard photography:

- **About Section** (`about-image`) — Add company/location photo
- **Services Section** (`service-visual`) — Add service-related images
- **Locations Section** (`location-image`) — Add city/location photos
- **Our Work Gallery** (`gallery-image`) — Add billboard campaign photos
- **Final CTA** — Optional background image

To add images:

1. Create an `assets/` folder if it doesn't exist: `mkdir assets`
2. Place optimized images (WebP/AVIF recommended) in `assets/`
3. Update the `src` paths in `index.html` or add CSS `background-image` rules in `styles.css`

### Example:
```html
<!-- In index.html -->
<img src="assets/billboard-1.jpg" alt="Campaign location" loading="lazy">
```

## Contact Form

- Uses `mailto:` for now (no backend required)
- To add email backend: implement a server endpoint and update `script.js` form handler
- Recommended: Node/Express, Netlify Functions, or AWS Lambda

## Performance

- Optimize all images: use WebP/AVIF, compress to <100KB
- Lazy load below-the-fold images with `loading="lazy"`
- CSS animations use GPU-friendly transforms
- No heavy JavaScript dependencies

## Customization

- **Phone/Email** — Update in navbar and contact sections
- **Social Links** — Update footer and contact section
- **Typography** — Fonts loaded from Google Fonts (Space Grotesk, Inter)
- **Colors** — Edit CSS variables or replace gold accent (#D4A574)

## Next Steps

1. Add real billboard images to `assets/` folder
2. Update image `src` paths and gallery captions
3. Replace contact details with real numbers/emails
4. Deploy to hosting (Netlify, Vercel, etc.)
5. Add Google Analytics and OpenGraph meta tags
6. Set up email backend for contact form
