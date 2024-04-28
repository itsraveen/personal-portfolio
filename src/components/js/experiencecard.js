import React, { useState } from 'react';
import ExperiencePopUpCard from './ExperiencePopUpCard'; // Updated import
import * as styles from '../css/experiencecard.module.css';

function ExperienceCard({ title, duration, description, subDescription, responsibilities }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => setIsPopUpOpen(true);
  const closePopUp = () => setIsPopUpOpen(false);

  // Structure the data object
  const data = {
    title,
    duration,
    description,
    subDescription,
    responsibilities
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
      {/* Pass the structured data object */}
      <ExperiencePopUpCard isOpen={isPopUpOpen} close={closePopUp} data={data}>
        <h2>{title}</h2>
        <p>{duration}</p>
        <p>{description}</p>
        {subDescription && <p>{subDescription}</p>}
        {responsibilities && (
          <div>
            <h3>Responsibilities:</h3>
            <ul>
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </ExperiencePopUpCard>
    </div>
  );
}

export default ExperienceCard;
