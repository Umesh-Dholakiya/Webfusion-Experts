import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSeedling, 
  FaChartLine, 
  FaRocket, 
  FaCompass, 
  FaHandshake, 
  FaUsers, 
  FaBolt, 
  FaCheckCircle 
} from 'react-icons/fa';

const storyMilestones = [
  {
    id: 1,
    tag: 'FOUNDING & VISION',
    year: '2026',
    title: 'Where It All Began',
    description:
      'WebFusion Experts was founded in 2026 with a clear conviction: businesses and startups deserve digital solutions built with modern technology, clean architecture, and purposeful design. What began with a focused team of engineers quickly established itself as a dedicated digital development studio.',
    icon: FaSeedling,
  },
  {
    id: 2,
    tag: 'CORE CAPABILITIES',
    year: '2026',
    title: 'Mastering Modern Web Solutions',
    description:
      'From day one, we focused on delivering end-to-end digital excellence—ranging from high-speed responsive websites to tailored web applications and custom software. Every project is crafted with clean code, responsive UX, and scalable infrastructure.',
    icon: FaBolt,
  },
  {
    id: 3,
    tag: 'CLIENT PARTNERSHIP',
    year: '2026',
    title: 'Bridging Vision & Execution',
    description:
      'We partner with visionary founders and growing businesses, adopting transparent sprints and agile collaboration. By eliminating unnecessary complexity, we turn requirements into reliable digital products that drive measurable business results.',
    icon: FaHandshake,
  },
  {
    id: 4,
    tag: 'LOOKING AHEAD',
    year: '2027 & Beyond',
    title: "Built for What's Next",
    description:
      'As we expand our footprint, we continue embracing next-generation web architectures, cloud-native scalability, and modern digital innovations—empowering ambitious businesses to stay ahead in an ever-evolving digital landscape.',
    icon: FaRocket,
  }
];

const pillars = [
  { icon: FaHandshake, label: 'Built on Trust' },
  { icon: FaUsers, label: 'User-Centric' },
  { icon: FaBolt, label: 'Tech-Driven' },
  { icon: FaCheckCircle, label: 'Always Evolving' },
];

const OurStorySection = () => {
  return (
    <section 
      className="section-padding position-relative" 
      style={{ 
        background: '#0b0b0b', 
        overflow: 'hidden',
        padding: '90px 0'
      }}
    >
      <style>{`
        .story-timeline-container {
          position: relative;
          max-width: 1060px;
          margin: 0 auto;
        }

        /* Central connecting line (Desktop) */
        .story-center-line {
          position: absolute;
          top: 30px;
          bottom: 30px;
          left: 50%;
          width: 2px;
          transform: translateX(-50%);
          background: linear-gradient(180deg, rgba(245, 124, 0, 0.15) 0%, rgba(245, 124, 0, 0.7) 50%, rgba(245, 124, 0, 0.15) 100%);
          box-shadow: 0 0 12px rgba(245, 124, 0, 0.3);
          z-index: 1;
        }

        /* Card styles */
        .story-card {
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 32px 30px;
          transition: all 0.35s ease;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .story-card:hover {
          border-color: rgba(245, 124, 0, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(245, 124, 0, 0.1);
        }

        /* Node styling in the center (Desktop) */
        .story-node {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #141414;
          border: 2px solid #f57c00;
          box-shadow: 0 0 20px rgba(245, 124, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f57c00;
          font-size: 20px;
          z-index: 3;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .story-node:hover {
          transform: scale(1.1);
          box-shadow: 0 0 25px rgba(245, 124, 0, 0.6);
        }

        /* Tag badge */
        .story-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #f57c00;
          text-transform: uppercase;
        }

        .story-year-badge {
          display: inline-block;
          background: rgba(245, 124, 0, 0.15);
          border: 1px solid rgba(245, 124, 0, 0.4);
          color: #f57c00;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 6px;
          letter-spacing: 0.5px;
        }

        .story-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          font-family: 'Space Grotesk', sans-serif;
        }

        .story-desc {
          color: #a3a3a3;
          font-size: 0.94rem;
          line-height: 1.7;
          margin: 0;
        }

        /* Pillars at bottom - Desktop */
        .story-pillars-wrapper {
          max-width: 920px;
          margin: 0 auto;
        }

        .story-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .story-pill-card {
          background: #131313;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #e0e0e0;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .story-pill-card:hover {
          border-color: rgba(245, 124, 0, 0.5);
          background: rgba(245, 124, 0, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(245, 124, 0, 0.15);
          color: #fff;
        }

        .story-pill-icon-box {
          color: #f57c00;
          font-size: 1.05rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-pill-title {
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          white-space: nowrap;
        }

        /* Dedicated Mobile Styles (< 768px) */
        @media (max-width: 767.98px) {
          .story-center-line {
            display: none !important;
          }

          .story-mobile-item {
            position: relative;
            margin-bottom: 28px;
            padding-left: 56px;
          }

          .story-mobile-item:last-child {
            margin-bottom: 0;
          }

          /* Mobile Process Line connecting node to next node */
          .story-mobile-connector-line {
            position: absolute;
            left: 20px;
            top: 42px;
            bottom: -28px;
            width: 2px;
            background: linear-gradient(180deg, #f57c00 0%, rgba(245, 124, 0, 0.4) 100%);
            box-shadow: 0 0 10px rgba(245, 124, 0, 0.45);
            z-index: 1;
          }

          /* Mobile Node with guaranteed visibility */
          .story-mobile-node {
            position: absolute;
            left: 0;
            top: 0;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: #141414;
            border: 2px solid #f57c00;
            box-shadow: 0 0 16px rgba(245, 124, 0, 0.5);
            display: flex !important;
            align-items: center;
            justify-content: center;
            color: #f57c00;
            font-size: 17px;
            z-index: 3;
          }

          /* Branch connector from node to card */
          .story-branch-connector {
            position: absolute;
            left: 42px;
            top: 20px;
            width: 14px;
            height: 2px;
            background: linear-gradient(90deg, #f57c00, rgba(245, 124, 0, 0.2));
            z-index: 2;
          }

          /* Mobile Card */
          .story-card-mobile {
            padding: 20px 16px;
            border-radius: 16px;
            background: #131313;
          }

          .story-card-mobile .story-title {
            font-size: 1.18rem;
            margin-bottom: 8px;
          }

          .story-card-mobile .story-desc {
            font-size: 0.88rem;
            line-height: 1.6;
          }

          /* Bottom 4 points in clean 2x2 grid */
          .story-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .story-pill-card {
            border-radius: 14px;
            padding: 14px 10px;
            flex-direction: column;
            text-align: center;
            gap: 8px;
            background: #141414;
          }

          .story-pill-icon-box {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: rgba(245, 124, 0, 0.12);
            border: 1px solid rgba(245, 124, 0, 0.3);
            font-size: 1rem;
          }

          .story-pill-title {
            font-size: 0.84rem;
            white-space: normal;
            line-height: 1.3;
          }
        }

        @media (max-width: 380px) {
          .story-mobile-item {
            padding-left: 50px;
          }
          .story-mobile-node {
            width: 38px;
            height: 38px;
            font-size: 15px;
          }
          .story-mobile-connector-line {
            left: 18px;
            top: 38px;
          }
          .story-branch-connector {
            left: 38px;
            top: 18px;
            width: 12px;
          }
          .story-pill-title {
            font-size: 0.78rem;
          }
          .story-pill-card {
            padding: 10px 6px;
          }
        }
      `}</style>

      <div className="container position-relative">
        {/* Section Header */}
        <div className="text-center mb-5 pb-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="d-inline-block px-3 py-1 mb-3 rounded-pill" 
              style={{
                background: 'rgba(245, 124, 0, 0.1)',
                border: '1px solid rgba(245, 124, 0, 0.3)',
                color: '#f57c00',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}
            >
              OUR STORY
            </div>

            <h2 
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '16px'
              }}
            >
              From Vision to <span style={{ color: '#f57c00' }}>Reality</span>
            </h2>

            <p 
              style={{
                color: '#a0a0a0',
                maxWidth: '620px',
                margin: '0 auto',
                fontSize: '1.05rem',
                lineHeight: '1.7'
              }}
            >
              Founded in 2026, our journey is defined by passion, modern engineering, and turning ambitious business ideas into high-performing digital realities.
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="story-timeline-container my-4 my-md-5">
          {/* Central Line for Desktop */}
          <div className="story-center-line d-none d-md-block" />

          {storyMilestones.map((item, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === storyMilestones.length - 1;
            const Icon = item.icon;

            return (
              <React.Fragment key={item.id}>
                {/* 1. MOBILE VIEW ITEM (< 768px) */}
                <div className="d-block d-md-none story-mobile-item">
                  {/* Glowing Node with icon */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.35 }}
                    className="story-mobile-node"
                  >
                    <Icon />
                  </motion.div>

                  {/* Connecting Process Line to next node (stops at last item) */}
                  {!isLast && <div className="story-mobile-connector-line" />}

                  {/* Horizontal Branch from Node to Card */}
                  <div className="story-branch-connector" />

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4 }}
                    className="story-card story-card-mobile"
                  >
                    <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
                      <span className="story-year-badge">{item.year}</span>
                      <span className="story-badge">{item.tag}</span>
                    </div>
                    <h3 className="story-title">{item.title}</h3>
                    <p className="story-desc">{item.description}</p>
                  </motion.div>
                </div>

                {/* 2. DESKTOP VIEW ROW (>= 768px) */}
                <div className="d-none d-md-flex row g-0 align-items-center mb-5 position-relative">
                  {/* Left Column */}
                  <div className={`col-md-5 ${isEven ? 'text-end pe-4' : ''}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="story-card"
                      >
                        <div className="d-flex align-items-center justify-content-end gap-2 mb-2">
                          <span className="story-badge">{item.tag}</span>
                          <span className="story-year-badge">{item.year}</span>
                        </div>
                        <h3 className="story-title">{item.title}</h3>
                        <p className="story-desc">{item.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Node */}
                  <div className="col-md-2 d-flex justify-content-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="story-node"
                    >
                      <Icon />
                    </motion.div>
                  </div>

                  {/* Right Column */}
                  <div className={`col-md-5 ${!isEven ? 'text-start ps-4' : ''}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="story-card"
                      >
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="story-year-badge">{item.year}</span>
                          <span className="story-badge">{item.tag}</span>
                        </div>
                        <h3 className="story-title">{item.title}</h3>
                        <p className="story-desc">{item.description}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom 4 Core Pillars / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="story-pillars-wrapper mt-4 mt-md-5 pt-3"
        >
          <div className="story-pillars-grid">
            {pillars.map((pill, i) => {
              const PillIcon = pill.icon;
              return (
                <div key={i} className="story-pill-card">
                  <div className="story-pill-icon-box">
                    <PillIcon />
                  </div>
                  <span className="story-pill-title">{pill.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection;
