import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  FaSearch, 
  FaProjectDiagram, 
  FaPaintBrush, 
  FaCode, 
  FaBug, 
  FaRocket, 
  FaHandshake,
  FaRegLightbulb,
  FaTools,
  FaLaptopCode,
  FaCheckDouble,
  FaLightbulb,
  FaCogs
} from 'react-icons/fa';
import { processData } from '../data/process';

const iconMap = {
  FaSearch,
  FaProjectDiagram,
  FaPaintBrush,
  FaCode,
  FaBug,
  FaRocket,
  FaHandshake,
  FaRegLightbulb,
  FaTools,
  FaLaptopCode,
  FaCheckDouble,
  FaLightbulb,
  FaCogs
};

const ProcessStepDesktop = ({ step, index, totalSteps, scrollYProgress }) => {
  let IconComponent = FaCode;
  if (typeof step.icon === 'function') {
    IconComponent = step.icon;
  } else if (typeof step.icon === 'string' && iconMap[step.icon]) {
    IconComponent = iconMap[step.icon];
  }

  const isReverse = index % 2 !== 0;

  const count = totalSteps || 7;
  const stepStart = count <= 1 ? 0 : Math.max(0, index / (count - 1) - 0.1);
  const stepEnd = count <= 1 ? 1 : Math.min(1, index / (count - 1) + 0.05);

  const contentOpacity = useTransform(scrollYProgress, [stepStart, stepEnd], [0.3, 1]);
  const contentY = useTransform(scrollYProgress, [stepStart, stepEnd], [20, 0]);
  
  const nodeBorderColor = useTransform(scrollYProgress, [stepStart, stepEnd], ['rgba(255,255,255,0.1)', '#f57c00']);
  const iconColor = useTransform(scrollYProgress, [stepStart, stepEnd], ['#555', '#ffffff']);
  const nodeScale = useTransform(scrollYProgress, [stepStart, stepEnd], [1, 1.1]);
  const nodeGlow = useTransform(scrollYProgress, [stepStart, stepEnd], ['0px 0px 0px rgba(245, 124, 0, 0)', '0px 0px 25px rgba(245, 124, 0, 0.3)']);

  const titleColor = useTransform(scrollYProgress, [stepStart, stepEnd], ['#888', '#fff']);
  const labelColor = useTransform(scrollYProgress, [stepStart, stepEnd], ['#555', '#cccccc']);
  const badgeBorder = useTransform(scrollYProgress, [stepStart, stepEnd], ['rgba(255,255,255,0.05)', 'rgba(255, 255, 255, 0.2)']);
  const descColor = useTransform(scrollYProgress, [stepStart, stepEnd], ['#666', '#cfcfcf']);

  return (
    <div className="row mb-5 pb-4 position-relative">
      {/* Content Column (Desktop Alternating) */}
      <div className={`col-md-5 ${isReverse ? 'order-md-1' : 'order-md-3'} d-flex flex-column justify-content-center text-start ${isReverse ? 'text-md-end' : ''}`}>
        <motion.div style={{ opacity: contentOpacity, y: contentY, padding: '0 40px' }}>
          <motion.p style={{
            color: labelColor,
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '10px'
          }}>
            <span style={{ color: '#f57c00', marginRight: '8px', opacity: 0.8 }}>
              {String(step.id || index + 1).padStart(2, '0')}
            </span>
            {step.label}
          </motion.p>
          <motion.h3 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: titleColor,
            marginBottom: '15px'
          }}>
            {step.title}
          </motion.h3>
          <motion.p style={{
            color: descColor,
            fontSize: '1rem',
            lineHeight: '1.7',
            marginBottom: '20px'
          }}>
            {step.description}
          </motion.p>
          
          {step.badge && (
            <motion.div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '6px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: badgeBorder,
              borderRadius: '30px',
              color: '#aaa',
              fontSize: '0.85rem',
              fontWeight: '500'
            }}
            className={isReverse ? 'ms-md-auto' : ''}
            >
              <span style={{ color: '#f57c00', marginRight: '8px' }}>•</span>
              {step.badge}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Desktop Timeline Node */}
      <div className="col-md-2 d-flex justify-content-center align-items-center order-md-2 position-relative z-index-3">
        <motion.div style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          backgroundColor: '#0a0a0a',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: nodeBorderColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          scale: nodeScale,
          boxShadow: nodeGlow,
          position: 'relative'
        }}>
          <motion.div style={{ color: iconColor }}>
            <IconComponent size={28} />
          </motion.div>
        </motion.div>
      </div>

      {/* Empty Column for Desktop Layout */}
      <div className={`col-md-5 ${isReverse ? 'order-md-3' : 'order-md-1'}`}></div>
    </div>
  );
};

const ProcessStepMobile = ({ step, index, totalSteps, scrollYProgress }) => {
  let IconComponent = FaCode;
  if (typeof step.icon === 'function') {
    IconComponent = step.icon;
  } else if (typeof step.icon === 'string' && iconMap[step.icon]) {
    IconComponent = iconMap[step.icon];
  }

  const count = totalSteps || 7;
  const stepStart = count <= 1 ? 0 : Math.max(0, index / (count - 1) - 0.1);
  const stepEnd = count <= 1 ? 1 : Math.min(1, index / (count - 1) + 0.05);

  const contentOpacity = useTransform(scrollYProgress, [stepStart, stepEnd], [0.35, 1]);
  const contentY = useTransform(scrollYProgress, [stepStart, stepEnd], [16, 0]);
  
  const nodeBorderColor = useTransform(scrollYProgress, [stepStart, stepEnd], ['rgba(255,255,255,0.12)', '#f57c00']);
  const iconColor = useTransform(scrollYProgress, [stepStart, stepEnd], ['#666', '#ffffff']);
  const nodeScale = useTransform(scrollYProgress, [stepStart, stepEnd], [1, 1.08]);
  const nodeGlow = useTransform(scrollYProgress, [stepStart, stepEnd], ['0px 0px 0px rgba(245, 124, 0, 0)', '0px 0px 18px rgba(245, 124, 0, 0.45)']);

  const titleColor = useTransform(scrollYProgress, [stepStart, stepEnd], ['#888', '#ffffff']);
  const labelColor = useTransform(scrollYProgress, [stepStart, stepEnd], ['#666', '#e0e0e0']);
  const descColor = useTransform(scrollYProgress, [stepStart, stepEnd], ['#777', '#cfcfcf']);
  const cardBorderColor = useTransform(scrollYProgress, [stepStart, stepEnd], ['rgba(255,255,255,0.06)', 'rgba(245, 124, 0, 0.35)']);
  const badgeBorder = useTransform(scrollYProgress, [stepStart, stepEnd], ['rgba(255,255,255,0.08)', 'rgba(245, 124, 0, 0.3)']);

  return (
    <div className="process-mobile-step position-relative">
      {/* Mobile Node */}
      <div className="process-mobile-node-box">
        <motion.div style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: '#0e0e0e',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: nodeBorderColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          scale: nodeScale,
          boxShadow: nodeGlow,
          position: 'relative'
        }}>
          <motion.div style={{ color: iconColor }}>
            <IconComponent size={17} />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Content Card */}
      <motion.div 
        className="process-mobile-card"
        style={{
          opacity: contentOpacity,
          y: contentY,
          borderColor: cardBorderColor
        }}
      >
        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
          <span style={{
            color: '#f57c00',
            fontSize: '0.78rem',
            fontWeight: '700',
            letterSpacing: '1px'
          }}>
            {String(step.id || index + 1).padStart(2, '0')}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>•</span>
          <motion.span style={{
            color: labelColor,
            fontSize: '0.72rem',
            fontWeight: '700',
            letterSpacing: '1.2px',
            textTransform: 'uppercase'
          }}>
            {step.label}
          </motion.span>
        </div>

        <motion.h3 style={{
          fontSize: '1.35rem',
          fontWeight: '700',
          color: titleColor,
          marginBottom: '10px',
          lineHeight: '1.25'
        }}>
          {step.title}
        </motion.h3>

        <motion.p style={{
          color: descColor,
          fontSize: '0.92rem',
          lineHeight: '1.6',
          marginBottom: step.badge ? '14px' : '0'
        }}>
          {step.description}
        </motion.p>

        {step.badge && (
          <motion.div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '5px 14px',
            backgroundColor: 'rgba(245, 124, 0, 0.05)',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: badgeBorder,
            borderRadius: '24px',
            color: '#c0c0c0',
            fontSize: '0.8rem',
            fontWeight: '500'
          }}>
            <span style={{ color: '#f57c00', marginRight: '6px', fontSize: '0.65rem' }}>●</span>
            {step.badge}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const ProcessSection = ({
  badge = "OUR PROCESS",
  title = (
    <>
      How We Build <br className="d-md-none" />
      <span style={{ color: '#f57c00' }}>Digital Solutions</span>
    </>
  ),
  description = "A clear and collaborative process that takes your idea from initial planning to launch and ongoing support.",
  steps = processData,
  className = "",
  style = {}
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef} 
      className={`process-section-wrapper position-relative ${className}`} 
      style={{ backgroundColor: '#0a0a0a', overflow: 'hidden', ...style }}
    >
      <style>{`
        .process-section-wrapper {
          padding: 100px 0;
        }
        @media (max-width: 767.98px) {
          .process-section-wrapper {
            padding: 60px 0;
          }
          .process-mobile-wrap {
            position: relative;
            padding-left: 8px;
            padding-right: 8px;
          }
          .process-mobile-step {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            margin-bottom: 24px;
            position: relative;
            z-index: 2;
          }
          .process-mobile-node-box {
            flex: 0 0 42px;
            width: 42px;
            display: flex;
            justify-content: center;
            padding-top: 4px;
            position: relative;
            z-index: 3;
          }
          .process-mobile-card {
            flex: 1 1 auto;
            min-width: 0;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 16px;
            padding: 16px 16px 18px 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(8px);
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }
          .process-mobile-line-base {
            position: absolute;
            left: 29px;
            top: 25px;
            bottom: 30px;
            width: 2px;
            background: rgba(255, 255, 255, 0.12);
            z-index: 1;
          }
          .process-mobile-line-active {
            position: absolute;
            left: 29px;
            top: 25px;
            bottom: 30px;
            width: 2px;
            background: #f57c00;
            transform-origin: top;
            z-index: 1;
            box-shadow: 0 0 10px rgba(245, 124, 0, 0.6);
          }
        }
      `}</style>

      <div className="container position-relative">
        
        {/* Header Section */}
        <div className="text-center mb-5 pb-2 pb-md-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {badge && (
              <p style={{
                color: '#f57c00',
                fontSize: '0.85rem',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}>
                {badge}
              </p>
            )}
            <h2 style={{
              fontSize: 'clamp(1.85rem, 4vw, 3rem)',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '18px'
            }}>
              {title}
            </h2>
            {description && (
              <p style={{
                color: '#cfcfcf',
                maxWidth: '600px',
                margin: '0 auto',
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                lineHeight: '1.6'
              }}>
                {description}
              </p>
            )}
          </motion.div>
        </div>

        {/* Desktop Timeline (> 768px) */}
        <div className="d-none d-md-block position-relative mt-5 pt-3">
          {/* Base Timeline Line (Subtle) */}
          <div className="position-absolute start-50 translate-middle-x" style={{
            top: '35px',
            bottom: '35px',
            width: '2px',
            background: 'rgba(255,255,255,0.15)',
            zIndex: 0
          }} />

          {/* Animated Active Timeline Line */}
          <motion.div className="position-absolute start-50" style={{
            top: '35px',
            bottom: '35px',
            width: '2px',
            background: '#f57c00',
            transformOrigin: 'top',
            scaleY,
            x: '-50%',
            zIndex: 1,
            boxShadow: '0 0 10px rgba(245, 124, 0, 0.5)'
          }} />

          {/* Desktop Timeline Steps */}
          <div className="position-relative" style={{ zIndex: 5 }}>
            {steps.map((step, index) => (
              <ProcessStepDesktop 
                key={step.id || index} 
                step={step} 
                index={index} 
                totalSteps={steps.length}
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </div>
        </div>

        {/* Mobile Timeline (< 768px) */}
        <div className="d-md-none process-mobile-wrap mt-4 pt-2">
          {/* Base Timeline Line */}
          <div className="process-mobile-line-base" />

          {/* Animated Active Timeline Line */}
          <motion.div 
            className="process-mobile-line-active" 
            style={{ scaleY }} 
          />

          {/* Mobile Timeline Steps */}
          <div className="position-relative" style={{ zIndex: 5 }}>
            {steps.map((step, index) => (
              <ProcessStepMobile
                key={step.id || index} 
                step={step} 
                index={index} 
                totalSteps={steps.length}
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;

