import * as React from 'react'

import Layout from '../components/js/layout';
import AboutMe from "../components/js/aboutme"
import FooterBar from "../components/js/footerbar"
import Navbar from '../components/js/navbar';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Navbar />
      <AboutMe />
      <FooterBar />
    </Layout>
  )
}

export default AboutPage