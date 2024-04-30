import * as React from "react"

import Layout from '../components/js/layout';
import Navbar from '../components/js/navbar';
import FooterBar from "../components/js/footerbar";
import Projects from "../components/js/project";

const ProjectsPage = () => {
    return (
      <Layout pageTitle="Projects">
        <Navbar />
        <Projects />
        <FooterBar />
      </Layout>
    )
}

export default ProjectsPage;
