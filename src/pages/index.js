import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/js/layout"
import Navbar from '../components/js/navbar';

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

export const Head = () => <title>Home Page</title>

export default IndexPage