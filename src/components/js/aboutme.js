import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import SkillsSection from "./skills"

import * as styles from "../css/aboutme.module.css" // Make sure the path to your CSS module is correct

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
          <p className={styles.description}>Hi!</p>
          <p className={styles.description}>Nice to meet you, I'm Raveen.</p>
          <p className={styles.description}>
            I am a final year computer science student with a passionate about the tech space. 
            I am interested in understanding the intricate workings of diverse tech teams throughout the software development process. My aim? To leverage these insights to engineer disruptive tech solutions that prioritize user satisfaction while adhering to industry best practices.
          </p>
          {showMore && (
            <div>
              <p className={styles.description}>
              During my tenure at Eye-share, a leading provider of purchase-to-pay solutions, I delved into the realm of solution development. Collaborating with clients across Europe and Asia, I crafted bespoke solutions tailored to their unique needs, gaining invaluable experience along the way.
              </p>
              <p className={styles.description}>
              Proficient in an array of programming languages, including Java, Python, and C#, I also boast expertise in frameworks like React, Flutter, and .NET. 
              I prioritize user experience which fuels my passion for crafting products that not only push the boundaries of innovation but also prioritize ease of use and accessibility.
              </p>
              <p className={styles.description}>
                I am currently pursuing a Bachelor’s Degree in Computing (Computer Science) at the National University of Singapore and will be graduating in May 2024 and  I'm eager to embark on the next chapter of my journey in the tech realm.
              </p>
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

export default AboutMe

