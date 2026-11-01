import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import ProcessSection from '../components/ProcessSection'
import WhyChooseSection from '../components/WhyChooseSection'
import PortfolioSection from '../components/PortfolioSection'
import IndustriesWeServeSection from '../components/IndustriesWeServeSection'
import TechStackSection from '../components/TechStackSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import CTASection from '../components/CTASection'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>WebFusion Experts | Building Premium Digital Experiences</title>
        <meta name="description" content="WebFusion Experts - Modern digital agency specializing in premium websites, scalable web applications, e-commerce solutions, and custom software development." />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <IndustriesWeServeSection />
      <TechStackSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </>
  )
}

export default Home
