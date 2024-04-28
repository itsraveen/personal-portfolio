import React, { useState } from 'react';
import classNames from 'classnames';
import ExperiencePopUpCard from './ExperiencePopUpCard';
import * as styles from '../css/experiencecard.module.css';

function ExperienceCard({ title, duration, place, subDescription, responsibilities, extraDetails, images, achievements }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);

  // In ExperienceCard component
  const data = {
    title,
    duration,
    place,
    subDescription,
    responsibilities,
    extraDetails, 
    images,
    achievements
  };


  return (
    <div>
      <div className={styles.cardContainer} onClick={openPopUp}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <div className={classNames(styles.cardDuration, styles.rightAligned)}>{duration}</div>
        </div>
        <div className={styles.cardDescription}>{place}</div>
        {subDescription && (
          <div className={styles.cardSubDescription}>{subDescription}</div>
        )}
      </div>
      <ExperiencePopUpCard isOpen={isPopUpOpen} close={closePopUp} data={data} />
    </div>
  );
}

export default ExperienceCard;
