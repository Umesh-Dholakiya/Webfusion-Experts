import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ServicesSection from '../components/ServicesSection'
import ProcessSection from '../components/ProcessSection'
import CTASection from '../components/CTASection'
import withPageHeader from '../hoc/withPageHeader'

const serviceProcessSteps = [
  { id: '01', label: 'PHASE 01', title: 'Discovery', description: 'Understanding business goals and project requirements through in-depth consultation.', icon: 'FaSearch' },
  { id: '02', label: 'PHASE 02', title: 'Planning', description: 'Creating scalable architecture and strategic roadmap for your project.', icon: 'FaProjectDiagram' },
  { id: '03', label: 'PHASE 03', title: 'Design', description: 'Crafting premium UI/UX experiences that captivate and convert.', icon: 'FaPaintBrush' },
  { id: '04', label: 'PHASE 04', title: 'Development', description: 'Building responsive and optimized digital products with clean code.', icon: 'FaCode' },
  { id: '05', label: 'PHASE 05', title: 'Testing', description: 'Rigorous testing to ensure everything works flawlessly before going live.', icon: 'FaBug' },
  { id: '06', label: 'PHASE 06', title: 'Launch', description: 'Deployment, optimization, and ongoing support for your product.', icon: 'FaRocket' }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | WebFusion Experts</title>
        <meta name="description" content="Explore our comprehensive digital services including web development, mobile app development, custom CRM systems, and complete digital solutions." />
      </Helmet>

      {/* Services Grid (6 cards) */}
      <ServicesSection hideHeader={true} />

      {/* Process Timeline (Scroll-driven) */}
      <ProcessSection 
        badge="OUR WORKFLOW"
        title={<>How We <span style={{ color: '#f57c00' }}>Work</span></>}
        description="A proven workflow that ensures every project is delivered with excellence."
        steps={serviceProcessSteps}
        style={{ backgroundColor: 'transparent' }}
      />

      {/* Responsive CTA */}
      <CTASection 
        title="Ready to Start Your Project?"
        description="Let's discuss how we can build something great together."
        primaryButtonText="Contact Us"
        secondaryButtonText="View Portfolio"
      />
    </>
  )
}

export default withPageHeader(Services, {
  badge: "OUR SERVICES",
  breadcrumb: "Services",
  title: (
    <>
      Premium <span style={{ color: '#f57c00' }}>Digital Services</span>
    </>
  ),
  subtitle: "From concept to launch, we provide end-to-end digital solutions that drive growth and deliver results."
});
