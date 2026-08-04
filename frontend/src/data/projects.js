import patelHospitalImg from '../assets/patel-hospital-website.png';
import scovilResortImg from '../assets/Air-scovil-resort-website.png';
import urbanGlowImg from '../assets/Air-urban-glow-salon-spa-website.png';

export const projectsData = [
  {
    id: 1,
    title: "Patel Hospital Website",
    category: "Websites",
    description: "A premium, fully responsive website for Patel Hospital featuring appointment booking, doctor profiles, and service details.",
    image: patelHospitalImg,
    tech: ["React", "Bootstrap", "Framer Motion", "SEO Optimization"],
    liveUrl: "https://patel-hospital-website.vercel.app/ "
  },
  {
    id: 2,
    title: "Scovil Resort Website",
    category: "Websites",
    description: "A luxury resort booking website showcasing villas, premium amenities, and a seamless reservation user experience.",
    image: scovilResortImg,
    tech: ["React", "Vite", "Framer Motion", "Vanilla CSS"],
    liveUrl: "https://scovil-resort-website.vercel.app/"
  },
  {
    id: 3,
    title: "Urban Glow Salon & Spa Website",
    category: "Websites",
    description: "A elegant salon & spa website with interactive service menu, booking calendar, and client review section.",
    image: urbanGlowImg,
    tech: ["React", "Bootstrap", "AOS Animations", "Responsive Design"],
    liveUrl: "https://urban-glow-salon-spa-website.vercel.app/"
  },
  {
    id: 4,
    title: "BiteFlow CRM - Restaurant CRM System",
    category: "CRM Systems",
    description: "A complete restaurant management CRM to handle orders, menu item tracking, table bookings, and daily revenue statistics.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    tech: ["React.js", "Express", "Node.js", "MongoDB"],
    liveUrl: "https://restaurant-crm-website.vercel.app/"
  },
  {
    id: 5,
    title: "Chronos Watches - Shopify Store",
    category: "Shopify Stores",
    description: "A premium watch e-commerce store designed to showcase luxury watches, complete with payment gate, product options and reviews.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    tech: ["Shopify Store", "Liquid Templating", "Tailwind CSS", "Shopify Apps"],
    liveUrl: "https://shopify-watch-store.vercel.app/"
  },
  {
    id: 6,
    title: "IronPulse CRM - Gym Management CRM",
    category: "CRM Systems",
    description: "A feature-rich gym management panel for membership tracking, attendance logging, trainer schedules, and payments.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    tech: ["React.js", "Firebase Auth", "Tailwind CSS", "Recharts"],
    liveUrl: "https://gym-crm-website.vercel.app/"
  }
];

export const projectCategories = [
  "All",
  "Websites",
  "CRM Systems",
  "Shopify Stores"
];
