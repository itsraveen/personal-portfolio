import * as React from 'react'
import SideMenu from "./experiencesidemenu"
import ExperienceSection from './experiencesection';
import * as styles from '../css/experience.module.css';
import { workExperiences, educations, leadershipExperiences } from '../../data/experience-data';

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.sectionTitle}>
          <h2>Experience</h2>
          <p className={styles.subHeading}>Where I have been working and what I have been doing so far...</p>
        </div>
        <div className={styles.cards}>
          <div id="work">
            <ExperienceSection title="💼 Work Experience" experiences={workExperiences} />
          </div>
          <div id="education">
            <ExperienceSection title="👨‍🎓 Education" experiences={educations} />
          </div>
          <div id="leadership">
            <ExperienceSection title="🎤 Leadership Experience" experiences={leadershipExperiences} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
