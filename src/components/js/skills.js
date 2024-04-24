import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "../css/skills.module.css"

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

  const logos = [
    {
      name: "Javascript",
      publicURL: "https://img.icons8.com/color/344/javascript--v1.png"
    },
    {
        name: "Python",
        publicURL: "https://img.icons8.com/color/344/python--v1.png"
    },
    {
        name: "Java",
        publicURL: "https://img.icons8.com/color/240/000000/java-coffee-cup-logo--v1.png"
    },
    {
        name: "C#",
        publicURL: "https://img.icons8.com/color/344/c-sharp-logo.png"
    },
    {
        name: "C++",
        publicURL: "https://img.icons8.com/?size=512&id=40669&format=png"
        
    },
    {
        name: "SQL",
        publicURL: "https://img.icons8.com/ios-filled/344/sql.png"
    },
    {
        name: "MongoDB",
        publicURL: "https://img.icons8.com/color/344/mongodb.png"
    },
    {
        name: "Flutter",
        publicURL: "https://img.icons8.com/color/240/000000/flutter.png"
    },
    {
        name: "React",
        publicURL: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    },
    {
        name: ".NET",
        publicURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png"
    },
    {
        name: "AWS",
        publicURL: "https://img.icons8.com/?size=512&id=33039&format=png"
    },
    {
        name: "Azure",
        publicURL: "https://img.icons8.com/?size=512&id=VLKafOkk3sBX&format=png"
        
    },
    {
        name: "HTML",
        publicURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
    },
    {
        name: "CSS",
        publicURL: "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
    },
    {
        name: "Figma",
        publicURL: "https://img.icons8.com/color/240/000000/figma--v1.png"
    },
    {
        name: "Elastic Search",
        publicURL: "https://cdn.iconscout.com/icon/free/png-256/free-elastic-search-3521403-2944847.png?f=webp"
    },
  ]

  return (
    <section id="skills" className={`${styles.skills} ${styles.sectionBg}`}>
      <div className={styles.container}>

        <div className={styles.sectionTitle}>
          <h2>Skills</h2>
        </div>

        <div className={`${styles.row} ${styles.skillsContent}`}>
          {logos.map(logo => (
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
