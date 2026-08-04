import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaLinkedin, FaGithub, FaTwitter, FaDribbble } from 'react-icons/fa';
import { teamData } from '../data/team';
import SectionHeader from './SectionHeader';

const TeamSection = ({ hideHeader = false }) => {
  return null; // Hidden as per request

  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const socialIcons = {
    linkedin: FaLinkedin,
    github: FaGithub,
    twitter: FaTwitter,
    dribbble: FaDribbble
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding position-relative"
      style={{ background: '#0b0b0b' }}
      id="team"
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <SectionHeader
          label="Our Team"
          title="Meet The Experts"
          subtitle="A talented team of designers, developers, and strategists passionate about creating exceptional digital experiences."
        />

        {/* Team Grid */}
        <div className="row g-4 justify-content-center">
          {teamData.map((member, i) => (
            <motion.div
              key={member.id}
              className="col-md-6 col-lg-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
            >
              <div
                className="position-relative overflow-hidden"
                style={{
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(245, 124, 0, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Image */}
                <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-100 h-100"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="position-absolute w-100"
                    style={{
                      bottom: 0,
                      left: 0,
                      height: '60%',
                      background: 'linear-gradient(transparent, rgba(11,11,11,0.9))'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h4
                    style={{
                      fontFamily: 'Space Grotesk',
                      fontWeight: 600,
                      fontSize: '1.2rem',
                      color: '#fff',
                      marginBottom: '0.3rem'
                    }}
                  >
                    {member.name}
                  </h4>
                  <p style={{ color: '#f57c00', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                    {member.role}
                  </p>
                  <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1rem' }}>
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="d-flex justify-content-center gap-3">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const IconComponent = socialIcons[platform];
                      return IconComponent ? (
                        <motion.a
                          key={platform}
                          href={url}
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: '10px',
                            background: 'rgba(255,255,255,0.05)',
                            color: '#888',
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease'
                          }}
                          whileHover={{
                            background: '#f57c00',
                            color: '#fff',
                            scale: 1.1
                          }}
                        >
                          <IconComponent />
                        </motion.a>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
