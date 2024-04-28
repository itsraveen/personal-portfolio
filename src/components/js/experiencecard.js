import React, { useState } from 'react';
import ExperiencePopUpCard from './ExperiencePopUpCard';
import * as styles from '../css/experiencecard.module.css';

function ExperienceCard({ title, duration, description, subDescription, responsibilities, extraDetails, images, achievements }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);

  // In ExperienceCard component
  const data = {
    title,
    duration,
    description,
    subDescription,
    responsibilities,
    extraDetails, 
    images,
    achievements
  };


  return (
    <div>
      <div className={styles.cardContainer} onClick={openPopUp}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardDuration}>
          <i className={`bx bx-calendar-alt ${styles.icon}`}></i> {duration}
        </div>
        <div className={styles.cardDescription}>{description}</div>
        {subDescription && (
          <div className={styles.cardSubDescription}>{subDescription}</div>
        )}
      </div>
      <ExperiencePopUpCard isOpen={isPopUpOpen} close={closePopUp} data={data} />
    </div>
  );
}

export default ExperienceCard;
