import * as React from 'react'

import Layout from '../components/js/layout';
import Experience from "../components/js/experience"
import FooterBar from "../components/js/footerbar"
import Navbar from '../components/js/navbar';

const ExperiencePage = () => {
  return (
    <Layout pageTitle="Experience">
      <Navbar />
      <Experience />
      <FooterBar />
    </Layout>
  )
}

export default ExperiencePage