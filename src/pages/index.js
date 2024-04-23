import * as React from "react"


import Layout from "../components/js/layout"
import Navbar from '../components/js/navbar';

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <Layout pageTitle="Home Page">

      </Layout>
    </div>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage