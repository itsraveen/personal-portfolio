import React from 'react';
import * as styles from '../css/experiencecard.module.css'; // Ensure the path to the CSS module is correct

function ExperienceCard({ title, duration, description, subDescription, responsibilities }) {
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardDuration}>
        <i className={`bx bx-calendar-alt ${styles.icon}`}></i> {duration}
      </div>
      <div className={styles.cardDescription}>{description}</div>
      {subDescription && (
        <div className={styles.cardSubDescription}>{subDescription}</div>
      )}
      {responsibilities && responsibilities.length > 0 && (
        <div className={styles.responsibilities}>
          <div className={styles.responsibilitiesHeader}>Responsibilities</div>
          <ul className={styles.responsibilitiesList}>
            {responsibilities.map((item, index) => (
              <li key={index} className={styles.responsibilityItem}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
