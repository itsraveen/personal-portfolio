import * as React from "react"
import { Link } from "gatsby"

import Navbar from '../components/js/navbar';
import FooterBar from "../components/js/footerbar";
import Projects from "../components/js/project";

const ProjectsPage = () => {
    return (
      <div>
        <Navbar />
        <Projects />
        <FooterBar />
      </div>
    )
  }

export const Head = () => <title>Projects</title>

export default ProjectsPage
