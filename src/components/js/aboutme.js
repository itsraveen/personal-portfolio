import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../css/aboutme.module.css" // Make sure the path to your CSS module is correct

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <StaticImage
          src="../../images/profile2.jpg" // Replace with the path to your image
          alt="Roy playing guitar"
          placeholder="blurred"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>About me</h1>
        <p className={styles.description}>Hey there!</p>
        <p className={styles.description}>Nice to meet you, I'm Raveen.</p>
        <p className={styles.description}>
          I am a final year college student passionate about the Product space. I'm interested in learning how different
          Product Teams work from ideation to execution, in hopes of using these practices myself to build disruptive
          tech-products that are data driven and user-focused.
        </p>
        <button className={styles.button}>Tell me more!</button>
        <div className={styles.interests}>
          <div className={styles.interest}>Frontend Dev</div>
          <div className={styles.interest}>UI/Ux Design</div>
          <div className={styles.interest}>Product Management</div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
