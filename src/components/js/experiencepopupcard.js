import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from '../css/experiencepopupcard.module.css';

function ExperiencePopUpCard({ isOpen, close, data }) {
  if (!isOpen) return null;
  console.log(data); // Add this line for debugging
  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.popupCard}>
        <button className={styles.closeButton} onClick={close}>&times;</button>
        <h2>{data.title}</h2>
        <p>{data.duration}</p>
        <p>{data.description}</p>
        <p>{data.subDescription}</p>
        {data.responsibilities && (
          <div>
            <h3>Responsibilities:</h3>
            <ul>
              {data.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {/* // In ExperiencePopUpCard component */}
        {data.extraDetails && (
          <div>
            <h3>More Details:</h3>
            <ul>
              {data.extraDetails.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {data.achievements && (
          <div>
            <h3>Achievements:</h3>
            <ul>
              {data.achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {data.images && data.images.map((image, index) => (
          <img key={index} src={image} alt={`${data.title} related`} style={{ width: '100%', height: 'auto', marginBottom: '10px' }}/>
        ))}
      </div>
    </div>,
    document.body
  );
}

export default ExperiencePopUpCard;
