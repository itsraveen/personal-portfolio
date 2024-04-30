import * as React from "react"

import Layout from '../components/js/layout';
import Hero from '../components/js/hero';
import Navbar from '../components/js/navbar';
import FooterBar from "../components/js/footerbar";

const IndexPage = () => {
  return (
    <Layout pageTitle="Raveen Prabhu">
      <Navbar />
      <Hero />
      <FooterBar />
    </Layout> 
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage