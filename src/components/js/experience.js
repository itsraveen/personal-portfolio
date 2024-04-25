import * as React from 'react'
import SideMenu from "./experiencesidemenu"
import ExperienceSection from './experiencesection';
import * as styles from '../css/experience.module.css';
import { workExperiences, educations, leadershipExperiences } from '../../data/experience-data'; // Adjust the path as needed

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideMenu />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Experiences</h1>
        <ExperienceSection title="Work Experience" experiences={workExperiences} />
        <ExperienceSection title="Education" experiences={educations} />
        <ExperienceSection title="Leadership Experience" experiences={leadershipExperiences} />
      </div>
    </div>
  )
}

export default Experience;
