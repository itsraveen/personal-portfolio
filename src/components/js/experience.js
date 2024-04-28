import * as React from 'react'
import SideMenu from "./experiencesidemenu"
import ExperienceSection from './experiencesection';
import * as styles from '../css/experience.module.css';
import { workExperiences, educations, leadershipExperiences } from '../../data/experience-data';

const Experience = () => {
  console.log(workExperiences); // Add this line for debugging
  return (
    <div className={styles.container}>
      {/* <div className={styles.sidebar}>
        <SideMenu />
      </div> */}
      <div className={styles.content}>
        <h1 className={styles.heading}>Experiences</h1>
        <div id="work">
          <ExperienceSection title="Work Experience" experiences={workExperiences} />
        </div>
        <div id="education">
          <ExperienceSection title="Education" experiences={educations} />
        </div>
        <div id="leadership">
          <ExperienceSection title="Leadership Experience" experiences={leadershipExperiences} />
        </div>
      </div>
    </div>
  )
}

export const Head = () => <title>Experience</title>

export default Experience;