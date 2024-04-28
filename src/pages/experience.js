import * as React from 'react'

import Experience from "../components/js/experience"
import FooterBar from "../components/js/footerbar"
import Navbar from '../components/js/navbar';


// Step 2: Define your component
const ExperiencePage = () => {
  return (
    <div>
      <Navbar />
      <Experience />
      <FooterBar />
    </div>
    
  )
}

export const Head = () => <title>About Me</title>

export default ExperiencePage