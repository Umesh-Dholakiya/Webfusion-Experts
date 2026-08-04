import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import ServicesSection from '../components/ServicesSection'
import WhyChooseSection from '../components/WhyChooseSection'
import PortfolioSection from '../components/PortfolioSection'
import TechStackSection from '../components/TechStackSection'
import TestimonialsSection from '../components/TestimonialsSection'
import TeamSection from '../components/TeamSection'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>WebFusion Experts | Building Premium Digital Experiences</title>
        <meta name="description" content="WebFusion Experts - Modern digital agency specializing in premium websites, scalable web applications, e-commerce solutions, and custom software development." />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioSection />
      <TechStackSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}

export default Home
