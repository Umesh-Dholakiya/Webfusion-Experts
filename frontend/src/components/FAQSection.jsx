import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { faqData } from '../data/faq';
import SectionHeader from './SectionHeader';

const FAQSection = ({ hideHeader = false }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding position-relative"
      style={{ background: '#121212' }}
      id="faq"
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Section Header */}
        {!hideHeader && (
          <SectionHeader
            label="FAQ"
            title="Common Questions"
            subtitle="Find answers to frequently asked questions about our services, process, and pricing."
          />
        )}

        {/* FAQ Accordion */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-3">
              {faqData.map((faq, i) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                >
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '16px',
                      border: '1px solid',
                      borderColor: openIndex === i ? 'rgba(245, 124, 0, 0.3)' : 'rgba(255,255,255,0.05)',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {/* Question Header */}
                    <button
                      className="w-100 d-flex align-items-center justify-content-between p-4"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        textAlign: 'left',
                        cursor: 'pointer'
                      }}
                      onClick={() => toggleFAQ(i)}
                    >
                      <span
                        style={{
                          fontFamily: 'Space Grotesk',
                          fontWeight: 600,
                          fontSize: '1rem',
                          paddingRight: '1rem'
                        }}
                      >
                        {faq.question}
                      </span>
                      <div
                        className="flex-shrink-0 d-flex align-items-center justify-content-center"
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: '8px',
                          background: openIndex === i ? 'linear-gradient(135deg, #f57c00, #ff9800)' : 'rgba(255,255,255,0.05)',
                          color: openIndex === i ? '#fff' : '#888',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {openIndex === i ? <FaMinus size={12} /> : <FaPlus size={12} />}
                      </div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div
                            className="px-4 pb-4"
                            style={{
                              color: '#888',
                              lineHeight: 1.8,
                              fontSize: '0.95rem',
                              borderTop: '1px solid rgba(255,255,255,0.05)',
                              paddingTop: '1rem'
                            }}
                          >
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
