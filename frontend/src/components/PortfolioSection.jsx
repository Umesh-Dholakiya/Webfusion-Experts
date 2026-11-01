import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';

import patelHospitalImg from '../assets/patel-hospital-website.png';
import scovilResortImg from '../assets/Air-scovil-resort-website.png';
import urbanGlowImg from '../assets/Air-urban-glow-salon-spa-website.png';
import royalsparkImg from '../assets/royalspark-elegance-website.png';
import pulseImg from '../assets/pluse-gym-website.png'

const projects = [
  {
    id: 1,
    image: patelHospitalImg,
    alt: 'Project showcase 1'
  },
  {
    id: 2,
    image: scovilResortImg,
    alt: 'Project showcase 2'
  },
  {
    id: 3,
    image: urbanGlowImg,
    alt: 'Project showcase 3'
  },
  {
    id: 4,
    image: royalsparkImg,
    alt: 'Project showcase 4'
  },
  {
    id: 5,
    image: pulseImg,
    alt: 'Project showcase 5'
  },
  {
    id: 6,
    image: royalsparkImg,
    alt: 'Project showcase 6'
  }
];

const PortfolioSection = ({ hideHeader = false }) => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="section-padding position-relative"
      style={{ background: '#0b0b0b' }}
      id="portfolio"
    >
      <style>{`
        .portfolio-card {
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          background: #0b0b0b;
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
          aspect-ratio: 16 / 10;
          cursor: default;
        }
        .portfolio-card:hover {
          border-color: #f57c00;
          box-shadow: 0 0 20px rgba(245, 124, 0, 0.15);
        }
        .portfolio-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }
        .portfolio-card:hover .portfolio-card-img {
          transform: scale(1.03);
        }
      `}</style>
      
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        {!hideHeader && (
          <SectionHeader
            label="SELECTED WORK"
            title="Our <span>Selected Work</span>"
            subtitle="A showcase of websites, digital experiences, and solutions built by WebFusion Experts."
          />
        )}

        {/* Projects Grid */}
        <div className="row g-4" style={{ marginTop: '-2rem' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="col-lg-4 col-md-6 col-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="portfolio-card position-relative">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="portfolio-card-img"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
