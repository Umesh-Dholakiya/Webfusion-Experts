# WebFusion Experts Portfolio

A premium, futuristic digital agency portfolio website built with React.js, Vite, and Bootstrap 5.

## Features

- **Premium Dark Theme** with orange (#f57c00) accent branding
- **Glassmorphism UI** with backdrop blur effects
- **Smooth Animations** powered by Framer Motion and AOS
- **Responsive Design** optimized for all devices
- **12 Complete Pages** with full routing
- **Interactive Components** including sliders, counters, and filters
- **SEO Optimized** with React Helmet Async
- **Cursor Glow Effect** on desktop
- **Scroll Progress Bar** with animated indicator
- **Loading Screen** with branded animation

## Tech Stack

- React.js 18
- Vite
- Bootstrap 5
- Framer Motion
- Swiper.js
- React Icons
- AOS Animation
- React Router DOM
- React CountUp
- React Helmet Async

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone or extract the project:**
   ```bash
   cd webfusion-experts-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Copy your logo to the public folder:**
   ```bash
   cp your-logo.png public/header_logo.png
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

5. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
webfusion-experts-portfolio/
├── public/
│   ├── header_logo.png       # Company logo
│   └── favicon               # Favicon (use logo)
├── src/
│   ├── assets/               # Images and media
│   ├── components/           # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── TechnologiesSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── TeamSection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── StatsSection.jsx
│   │   ├── WhyChooseSection.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── CursorGlow.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/                # Route pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Technologies.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   ├── Careers.jsx
│   │   ├── FAQ.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsConditions.jsx
│   ├── layouts/              # Layout components
│   ├── routes/               # Route configurations
│   ├── hooks/                # Custom React hooks
│   │   ├── useScrollPosition.js
│   │   └── useMousePosition.js
│   ├── data/                 # Data files
│   │   ├── services.js
│   │   ├── projects.js
│   │   ├── technologies.js
│   │   ├── testimonials.js
│   │   ├── team.js
│   │   ├── faq.js
│   │   ├── careers.js
│   │   ├── stats.js
│   │   ├── whyChooseUs.js
│   │   └── timeline.js
│   ├── styles/               # CSS files
│   │   └── global.css
│   ├── utils/                # Utility functions
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Main landing page with all sections |
| About | `/about` | Company story, mission, vision, timeline |
| Services | `/services` | Service cards and process workflow |
| Portfolio | `/portfolio` | Project showcase with filtering |
| Technologies | `/technologies` | Tech stack display |
| Testimonials | `/testimonials` | Client reviews slider |
| Team | `/team` | Team member profiles |
| Contact | `/contact` | Contact form and info |
| Careers | `/careers` | Job openings |
| FAQ | `/faq` | Frequently asked questions |
| Privacy Policy | `/privacy-policy` | Legal page |
| Terms | `/terms-conditions` | Legal page |

## Deployment (Vercel)

### Method 1: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### Method 2: GitHub + Vercel

1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Framework Preset: **Vite**
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click **Deploy**

### Method 3: Manual Upload

1. Build the project: `npm run build`
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project" → "Upload"
4. Upload the `dist` folder

## Customization

### Colors
Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --primary-orange: #f57c00;
  --dark-bg: #0b0b0b;
  --dark-bg-secondary: #121212;
  --text-white: #ffffff;
  --text-gray: #cfcfcf;
}
```

### Content
Update data files in `src/data/` to modify:
- Services
- Projects
- Team members
- Testimonials
- FAQ items
- Career openings

### Images
Replace placeholder images in the `public/` folder and update references in data files.

## Performance

- Lazy loading implemented for images
- Optimized animations with Framer Motion
- Clean reusable component architecture
- Bootstrap 5 for efficient responsive grid
- SEO optimized with meta tags and semantic HTML

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 WebFusion Experts. All rights reserved.
