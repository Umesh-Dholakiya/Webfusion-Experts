import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonialsData } from '../data/testimonials';
import SectionHeader from './SectionHeader';

import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = ({ hideHeader = false }) => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="section-padding position-relative"
      style={{ background: '#121212' }}
      id="testimonials"
    >
      {/* Background Glow */}
      <div
        className="position-absolute"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(245, 124, 0, 0.06) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          filter: 'blur(100px)'
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        {!hideHeader && (
          <SectionHeader
            label="Testimonials"
            title="What Clients Say"
            subtitle="Hear from businesses and entrepreneurs who have transformed their digital presence with us."
          />
        )}

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            style={{ paddingBottom: '50px' }}
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div
                  className="h-100 p-4"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(245, 124, 0, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Quote Icon */}
                  <FaQuoteLeft size={24} style={{ color: 'rgba(245, 124, 0, 0.3)', marginBottom: '1rem' }} />

                  {/* Rating */}
                  <div className="d-flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} size={14} style={{ color: '#f57c00' }} />
                    ))}
                  </div>

                  {/* Text */}
                  <p style={{ color: '#cfcfcf', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle"
                      style={{ width: 50, height: 50, objectFit: 'cover', border: '2px solid rgba(245, 124, 0, 0.3)' }}
                    />
                    <div>
                      <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>
                        {testimonial.name}
                      </div>
                      <div style={{ color: '#888', fontSize: '0.8rem' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom Pagination Styles */}
      <style>{`
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.3) !important;
          width: 10px !important;
          height: 10px !important;
        }
        .swiper-pagination-bullet-active {
          background: #f57c00 !important;
          box-shadow: 0 0 10px rgba(245, 124, 0, 0.5) !important;
        }
        .swiper-slide {
          height: auto !important;
        }
        .swiper-wrapper {
          align-items: stretch;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
