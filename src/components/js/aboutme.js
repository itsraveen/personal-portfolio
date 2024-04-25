import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import SkillsSection from "./skills";
import * as styles from "../css/aboutme.module.css"; // Ensure the path to your CSS module is correct
import { aboutMeData } from "../../data/aboutme-data"; // Import the data

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    const navbarHeight = 80; // Set the height of your navbar here
    const scrollPosition = skillsSection.offsetTop - navbarHeight;
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.aboutMeContainer}>
        <div className={styles.imageContainer}>
          <StaticImage
            src="../../images/profile2.png" // Replace with the path to your image
            alt="Roy playing guitar"
            placeholder="blurred"
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>About me</h1>
          <p className={styles.description}>{aboutMeData.introduction}</p>
          <p className={styles.description}>{aboutMeData.mainDescription}</p>
          {showMore && (
            <div>
              {aboutMeData.extendedDescription.map((paragraph, index) => (
                <p key={index} className={styles.description}>{paragraph}</p>
              ))}
            </div>
          )}
          <div>
            <button className={styles.button} onClick={toggleShowMore}>
              {showMore ? 'Read less' : 'Tell me more!'}
            </button>
          </div>
          
          <button className={styles.button} onClick={scrollToSkills}>
            See my skills
          </button>
        </div>
      </div>
      <SkillsSection />
    </div>
  )
}

export default AboutMe;
