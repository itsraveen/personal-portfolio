import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "../css/skills.module.css"
import { skillsData } from "../../data/skills-data"; // Import the skills data

const SkillsSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(png|jpg|jpeg)/" }, relativeDirectory: { eq: "images" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  return (
    <section id="skills" className={`${styles.skills} ${styles.sectionBg}`}>
      <div className={styles.container}>

        <div className={styles.sectionTitle}>
          <h2>Skills</h2>
        </div>

        <div className={`${styles.row} ${styles.skillsContent}`}>
          {skillsData.map(logo => (
            <div key={logo.name} className={styles.language}>
              <figure className={styles.languageImgWrapper}>
                <img src={logo.publicURL} alt={logo.name} className={styles.languageImg} />
              </figure>
              <span className={styles.languageName}>{logo.name}</span>
            </div>
          ))}
          {data.allFile.edges.map(({ node }) => (
            <div key={node.name} className={styles.language}>
              <figure className={styles.languageImgWrapper}>
                <img src={node.publicURL} alt={node.name} className={styles.languageImg} />
              </figure>
              <span className={styles.languageName}>{node.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
