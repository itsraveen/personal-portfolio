import React, { useState } from 'react';
import classNames from 'classnames';
import ExperiencePopUpCard from './ExperiencePopUpCard';
import * as styles from '../css/experiencecard.module.css';
import { FaBriefcase, FaRegCalendarAlt } from 'react-icons/fa';  // Import the icons

function ExperienceCard({ title, duration, place, subDescription, responsibilities, extraDetails, images, achievements }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);

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
          <h3 className={styles.cardTitle}>{title}  {/* Adding the briefcase icon with class for styling */}
          </h3>
          <div className={classNames(styles.cardDuration, styles.rightAligned)}>
            <FaRegCalendarAlt className={styles.icon} />{duration}  {/* Adding the calendar icon with class for styling */}
          </div>
        </div>
        <div className={styles.cardDescription}>
            <FaBriefcase className={styles.icon} />{place}</div>
        {subDescription && (
          <div className={styles.cardSubDescription}>{subDescription}</div>
        )}
      </div>
      <ExperiencePopUpCard isOpen={isPopUpOpen} close={closePopUp} data={data} />
    </div>
  );
}

export default ExperienceCard;
