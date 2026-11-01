import React from 'react'
import { Helmet } from 'react-helmet-async'
import PortfolioSection from '../components/PortfolioSection'
import TestimonialsSection from '../components/TestimonialsSection'
import withPageHeader from '../hoc/withPageHeader'

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | WebFusion Experts</title>
        <meta name="description" content="View our portfolio of premium websites, web applications, e-commerce solutions, and digital products." />
      </Helmet>

      <PortfolioSection hideHeader={true} />
    
      <TestimonialsSection />
    </>
  )
}

export default withPageHeader(Portfolio, {
  badge: "OUR WORK",
  breadcrumb: "Portfolio",
  title: (
    <>
      Our <span style={{ color: '#f57c00' }}>Portfolio</span>
    </>
  ),
  subtitle: "Explore our collection of modern websites and custom digital solutions crafted for ambitious businesses."
});
