// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/js/layout"
import Navbar from '../components/js/navbar';

// Step 2: Define your component
const AboutPage = () => {
  return (
    <div>
      <Navbar />
      
      <Layout pageTitle="About">

      </Layout>
    </div>
    
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage