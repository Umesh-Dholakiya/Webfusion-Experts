import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found | WebFusion Experts</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <section className="section-padding section-dark position-relative d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', paddingTop: '120px' }}>
        <div className="container text-center position-relative z-index-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(5rem, 15vw, 10rem)',
              fontWeight: 700,
              lineHeight: 1,
              marginBottom: '1rem',
              color: '#f57c00'
            }}>
              404
            </h1>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '2rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              color: '#fff'
            }}>
              Page Not Found
            </h2>
            <p style={{
              color: '#cfcfcf',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.8
            }}>
              Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <Link to="/" className="btn-premium">
              Return to Home
            </Link>
          </motion.div>
        </div>
        
        <div className="orange-glow" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }} />
      </section>
    </>
  );
};

export default NotFound;
