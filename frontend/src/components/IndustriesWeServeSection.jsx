import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShoppingCart, 
  FaHeartbeat, 
  FaGraduationCap, 
  FaUniversity, 
  FaBuilding, 
  FaUtensils, 
  FaLayerGroup, 
  FaRocket 
} from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const iconMap = {
  FaShoppingCart,
  FaHeartbeat,
  FaGraduationCap,
  FaUniversity,
  FaBuilding,
  FaUtensils,
  FaLayerGroup,
  FaRocket
};

const industries = [
  {
    id: 1,
    title: 'E-Commerce',
    description: 'Online stores, product platforms & digital shopping experiences',
    icon: 'FaShoppingCart'
  },
  {
    id: 2,
    title: 'Healthcare',
    description: 'Websites, digital platforms & business solutions for healthcare',
    icon: 'FaHeartbeat'
  },
  {
    id: 3,
    title: 'Education',
    description: 'Learning platforms, websites & digital education solutions',
    icon: 'FaGraduationCap'
  },
  {
    id: 4,
    title: 'Finance',
    description: 'Websites, dashboards & digital tools for financial businesses',
    icon: 'FaUniversity'
  },
  {
    id: 5,
    title: 'Real Estate',
    description: 'Property websites, listings & lead management solutions',
    icon: 'FaBuilding'
  },
  {
    id: 6,
    title: 'Food & Restaurants',
    description: 'Restaurant websites, ordering platforms & digital experiences',
    icon: 'FaUtensils'
  },
  {
    id: 7,
    title: 'SaaS & Technology',
    description: 'Websites, web apps & digital products for technology businesses',
    icon: 'FaLayerGroup'
  },
  {
    id: 8,
    title: 'Startups & Small Businesses',
    description: 'Websites, MVPs & custom digital solutions for growing businesses',
    icon: 'FaRocket'
  }
];

const IndustriesWeServeSection = () => {
  return (
    <section className="section-padding position-relative" style={{ background: '#0b0b0b' }}>
      <style>{`
        .industry-card {
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .industry-card:hover {
          transform: translateY(-4px);
          border-color: #f57c00;
          box-shadow: 0 0 20px rgba(245, 124, 0, 0.15);
        }
        .industry-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(245, 124, 0, 0.15), rgba(245, 124, 0, 0.05));
          border: 1px solid rgba(245, 124, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
          transition: background 0.3s ease;
        }
        .industry-card:hover .industry-icon-wrapper {
          background: linear-gradient(135deg, rgba(245, 124, 0, 0.25), rgba(245, 124, 0, 0.1));
        }
        .industry-icon {
          color: #f57c00;
          font-size: 22px;
          transition: transform 0.3s ease;
        }
        .industry-card:hover .industry-icon {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .industry-card {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>

      <div className="container position-relative z-index-1">
        <SectionHeader
          label="INDUSTRIES"
          title="Industries We <span>Serve</span>"
          subtitle="Building modern digital solutions for businesses across different industries and use cases."
        />

        <div className="row g-4 mt-4 justify-content-center">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon];
            return (
              <motion.div
                key={industry.id}
                className="col-lg-3 col-md-6 col-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="industry-card">
                  <div className="industry-icon-wrapper">
                    <IconComponent className="industry-icon" />
                  </div>
                  <h5 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                    color: '#fff'
                  }}>
                    {industry.title}
                  </h5>
                  <p style={{
                    color: '#888',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    marginBottom: 0,
                    flexGrow: 1
                  }}>
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServeSection;
