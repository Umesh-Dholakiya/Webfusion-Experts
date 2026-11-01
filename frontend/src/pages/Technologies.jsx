import React from 'react'
import { Helmet } from 'react-helmet-async'
import TechStackSection from '../components/TechStackSection'
import CTASection from '../components/CTASection'
import withPageHeader from '../hoc/withPageHeader'

const Technologies = () => {
  return (
    <>
      <Helmet>
        <title>Technologies | WebFusion Experts</title>
        <meta name="description" content="Discover the cutting-edge technologies we use to build premium digital solutions." />
      </Helmet>

      <TechStackSection hideHeader={true} />
      <CTASection />
    </>
  )
}

export default withPageHeader(Technologies, {
  badge: "TECH STACK",
  breadcrumb: "Technologies",
  title: (
    <>
      Our <span style={{ color: '#f57c00' }}>Technologies</span>
    </>
  ),
  subtitle: "We leverage modern technologies to build powerful, scalable, and reliable digital solutions."
});

