import * as React from "react"

import Hero from '../components/js/hero';
import Navbar from '../components/js/navbar';
import FooterBar from "../components/js/footerbar";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FooterBar />
    </div>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage