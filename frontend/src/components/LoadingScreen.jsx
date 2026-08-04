import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2000; // Finish before App.jsx timeout (2500ms) to ensure it hits 100%
    const intervalTime = 20; 
    const totalSteps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const currentProgress = Math.min(Math.round((step / totalSteps) * 100), 100);
      setProgress(currentProgress);
      if (step >= totalSteps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading-screen" style={{
      position: 'fixed',
      inset: 0,
      background: '#0b0b0b',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      {/* Background Pulse Glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 124, 0, 0.12) 0%, transparent 60%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: '50px' }}
        >
          <img 
            src="/header_logo.png" 
            alt="WebFusion Experts" 
            style={{ height: '70px', width: 'auto', filter: 'drop-shadow(0 0 15px rgba(245,124,0,0.3))' }}
          />
        </motion.div>

        {/* Dynamic Percentage Counter */}
        <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '20px' }}>
          <motion.h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '4.5rem',
              fontWeight: 700,
              margin: 0,
              lineHeight: 1,
              background: 'linear-gradient(135deg, #ffffff 0%, #f57c00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 10px rgba(245,124,0,0.2))'
            }}
          >
            {progress}
          </motion.h1>
          <span style={{ 
            fontSize: '1.8rem', 
            fontWeight: 700, 
            color: '#f57c00', 
            marginBottom: '8px', 
            marginLeft: '8px' 
          }}>
            %
          </span>
        </div>

        {/* Sleek Glowing Progress Bar */}
        <div style={{
          width: '280px',
          height: '4px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '10px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: 'linear' }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #f57c00, #ffb74d)',
              borderRadius: '10px',
              boxShadow: '0 0 20px rgba(245, 124, 0, 0.8)'
            }}
          />
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            marginTop: '25px',
            color: '#888',
            fontSize: '0.85rem',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontFamily: "'Space Grotesk', sans-serif"
          }}
        >
          Initializing Experience
        </motion.p>
      </div>
    </div>
  )
}

export default LoadingScreen
