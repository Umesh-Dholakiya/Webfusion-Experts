import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactSection from '../components/ContactSection'
import withPageHeader from '../hoc/withPageHeader'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | WebFusion Experts</title>
        <meta name="description" content="Get in touch with WebFusion Experts for your next digital project." />
      </Helmet>

      <ContactSection />
    </>
  )
}

export default withPageHeader(Contact, {
  badge: "GET IN TOUCH",
  breadcrumb: "Contact",
  title: (
    <>
      Let's <span style={{ color: '#f57c00' }}>Connect</span>
    </>
  ),
  subtitle: "Have a project in mind? We'd love to hear from you. Reach out and let's create something amazing together."
});

