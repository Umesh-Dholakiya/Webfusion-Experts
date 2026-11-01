import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub
} from 'react-icons/fa';
import { RiFlutterFill, RiNextjsFill } from 'react-icons/ri';
import { SiExpress, SiKotlin, SiDotnet, SiElectron, SiMongodb, SiVercel } from 'react-icons/si';

const iconMap = {
  FaReact,
  RiNextjsFill,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  SiExpress,
  RiFlutterFill,
  SiKotlin,
  SiDotnet,
  SiElectron,
  SiMongodb,
  FaGithub,
  SiVercel
};

const technologyCategories = [
  {
    id: 1,
    title: 'Frontend Development',
    technologies: [
      { name: 'React.js', icon: 'FaReact' },
      { name: 'Next.js', icon: 'RiNextjsFill' },
      { name: 'JavaScript', icon: 'FaJs' },
      { name: 'HTML5', icon: 'FaHtml5' },
      { name: 'CSS3', icon: 'FaCss3Alt' }
    ]
  },
  {
    id: 2,
    title: 'Backend Development',
    technologies: [
      { name: 'Node.js', icon: 'FaNodeJs' },
      { name: 'Express.js', icon: 'SiExpress' }
    ]
  },
  {
    id: 3,
    title: 'Mobile Development',
    technologies: [
      { name: 'Flutter', icon: 'RiFlutterFill' },
      { name: 'React Native', icon: 'FaReact' },
      { name: 'Kotlin', icon: 'SiKotlin' }
    ]
  },
  {
    id: 4,
    title: 'Desktop Development',
    technologies: [
      { name: '.NET', icon: 'SiDotnet' },
      { name: 'Electron', icon: 'SiElectron' }
    ]
  },
  {
    id: 5,
    title: 'Database & Tools',
    technologies: [
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'GitHub', icon: 'FaGithub' },
      { name: 'Vercel', icon: 'SiVercel' }
    ]
  }
];

const TechStackSection = ({ hideHeader = false }) => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="section-padding position-relative"
      style={{ background: '#0b0b0b' }}
      id="technologies"
    >
      <style>{`
        .tech-card {
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 2rem;
          height: 100%;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .tech-card:hover {
          transform: translateY(-4px);
          border-color: #f57c00;
          box-shadow: 0 0 20px rgba(245, 124, 0, 0.15);
        }
        .tech-item-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .tech-card:hover .tech-item-icon {
          background: rgba(245, 124, 0, 0.1);
        }
        .tech-icon-svg {
          color: #f57c00;
          font-size: 18px;
          transition: transform 0.3s ease;
        }
        .tech-card:hover .tech-icon-svg {
          transform: scale(1.1);
        }
      `}</style>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {!hideHeader && (
          <SectionHeader
            label="TECH STACK"
            title="Technologies We <span>Use</span>"
            subtitle="We use modern technologies and development tools to build reliable digital solutions for different business needs."
          />
        )}

        <div className="row g-4 mt-4">
          {technologyCategories.map((category, idx) => {
            const isFullWidth = category.id === 5;
            return (
              <motion.div
                key={category.id}
                className={isFullWidth ? "col-12" : "col-lg-6 col-md-6 col-12"}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="tech-card">
                  <h5 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    color: '#fff',
                    marginBottom: '1.5rem',
                    fontSize: '1.2rem'
                  }}>
                    <span style={{ color: '#f57c00', marginRight: '6px' }}>/</span>
                    {category.title}
                  </h5>
                  
                  <div className="row g-3">
                    {category.technologies.map(tech => {
                      const IconComponent = iconMap[tech.icon];
                      return (
                        <div key={tech.name} className="col-sm-6 col-12">
                          <div className="d-flex align-items-center gap-3">
                            <div className="tech-item-icon">
                              {IconComponent && <IconComponent className="tech-icon-svg" />}
                            </div>
                            <span style={{ color: '#e0e0e0', fontWeight: 500, fontSize: '0.95rem' }}>
                              {tech.name}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
