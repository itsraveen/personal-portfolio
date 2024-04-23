import * as React from 'react'

import AboutMe from "../components/js/aboutme"
import FooterBar from "../components/js/footerbar"
import Navbar from '../components/js/navbar';


// Step 2: Define your component
const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <FooterBar />
    </div>
    
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage