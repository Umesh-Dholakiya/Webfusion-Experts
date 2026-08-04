import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaNodeJs, FaServer, FaDatabase, FaFire, FaShopify,
  FaGithub, FaRocket
} from 'react-icons/fa';
import { technologies } from '../data/techStack';
import SectionHeader from './SectionHeader';


const iconMap = {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaNodeJs, FaServer, FaDatabase, FaFire, FaShopify,
  FaGithub, FaRocket
};

const TechStackSection = ({ hideHeader = false }) => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const categories = [...new Set(technologies.map(t => t.category))];

  return (
    <section
      ref={sectionRef}
      className="section-padding position-relative"
      style={{ background: '#0b0b0b' }}
      id="technologies"
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        {!hideHeader && (
          <SectionHeader
            label="Tech Stack"
            title="Technologies We Use"
            subtitle="We leverage cutting-edge technologies to build robust, scalable, and high-performance digital solutions."
          />
        )}

        {/* Categories */}
        {categories.map((category, ci) => (
          <div key={category} className="mb-5">
            <motion.h4
              className="text-center mb-4"
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 600,
                fontSize: '1.1rem',
                color: '#888'
              }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 + ci * 0.1 }}
            >
              {category}
            </motion.h4>
            <div className="row g-4 justify-content-center">
              {technologies
                .filter(t => t.category === category)
                .map((tech, i) => {
                  const IconComponent = iconMap[tech.icon];
                  return (
                    <motion.div
                      key={tech.name}
                      className="col-6 col-md-4 col-lg-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + ci * 0.2 + i * 0.1 }}
                    >
                      <div
                        className="text-center p-4"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          borderRadius: '16px',
                          border: '1px solid rgba(255,255,255,0.05)',
                          transition: 'all 0.4s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = tech.color;
                          e.currentTarget.style.boxShadow = `0 0 30px ${tech.color}20`;
                          e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        }}
                      >
                        {IconComponent && (
                          <IconComponent
                            size={40}
                            style={{
                              color: tech.color,
                              marginBottom: '1rem',
                              filter: `drop-shadow(0 0 10px ${tech.color}40)`
                            }}
                          />
                        )}
                        <div
                          style={{
                            fontFamily: 'Space Grotesk',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            color: '#fff'
                          }}
                        >
                          {tech.name}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
