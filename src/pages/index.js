import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Navbar from '../components/navbar';
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
          src="../images/example.png"
        />
      </Layout>
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <title>Home Page</title>

export default IndexPage