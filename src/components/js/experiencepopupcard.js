import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from '../css/experiencepopupcard.module.css';

function ExperiencePopUpCard({ isOpen, close, data }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.popupCard}>
        <button className={styles.closeButton} onClick={close}>&times;</button>
        <h2>{data.title}</h2>
        <p>{data.duration}</p>
        <p>{data.place}</p>
        <p>{data.subDescription}</p>

        {data.responsibilities && data.responsibilities.length > 0 && (
          <div>
            <h3>Responsibilities:</h3>
            <ul>
              {data.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {data.extraDetails && data.extraDetails.length > 0 && (
          <div>
            <h3>More Details:</h3>
            <ul>
              {data.extraDetails.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {data.achievements && data.achievements.length > 0 && (
          <div>
            <h3>Achievements:</h3>
            <ul>
              {data.achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.photoContainer}>
          {data.images && data.images.length > 0 && data.images.map((image, index) => {
            const imagePath = require(`./../../images/${image.src}`); // Dynamically require the image
            return (
              <div key={index} className={styles.photoWrapper}>
                <img src={imagePath.default || imagePath} alt={`${data.title} related`} className={styles.photo} />
                <p className={styles.caption}>{image.caption}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ExperiencePopUpCard;
