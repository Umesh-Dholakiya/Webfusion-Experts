import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projectsData, projectCategories } from '../data/projects';
import SectionHeader from './SectionHeader';


const PortfolioSection = ({ hideHeader = false }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      className="section-padding position-relative"
      style={{ background: '#0b0b0b' }}
      id="portfolio"
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        {!hideHeader && (
          <SectionHeader
            label="Our Work"
            title="Featured Projects"
            subtitle="Explore our portfolio of premium digital products and successful client collaborations."
          />
        )}

        {/* Category Filters */}
        <motion.div
          className="d-flex flex-wrap justify-content-center gap-2 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              className="btn"
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '8px 20px',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 500,
                border: '1px solid',
                transition: 'all 0.3s ease',
                background: activeCategory === category
                  ? 'linear-gradient(135deg, #f57c00, #ff9800)'
                  : 'transparent',
                borderColor: activeCategory === category ? '#f57c00' : 'rgba(255,255,255,0.1)',
                color: activeCategory === category ? '#fff' : '#888'
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="row g-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                className="col-md-6 col-lg-4"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div
                  className="position-relative overflow-hidden"
                  style={{
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer'
                  }}
                >
                  {/* Image */}
                  <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease'
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: '#f57c00',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}
                    >
                      {project.category}
                    </span>
                    <h4
                      style={{
                        fontFamily: 'Space Grotesk',
                        fontWeight: 600,
                        fontSize: '1.2rem',
                        color: '#fff',
                        marginTop: '0.5rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      {project.title}
                    </h4>
                    <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {project.description}
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {project.tech.map((tech, ti) => (
                        <span
                          key={ti}
                          style={{
                            padding: '4px 12px',
                            background: 'rgba(245, 124, 0, 0.1)',
                            border: '1px solid rgba(245, 124, 0, 0.2)',
                            borderRadius: '50px',
                            fontSize: '0.75rem',
                            color: '#f57c00',
                            fontWeight: 500
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
