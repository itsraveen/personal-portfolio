import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from '../css/experiencepopupcard.module.css'; // Ensure the path and filename are updated

function ExperiencePopUpCard({ isOpen, close, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.popupCard}>
        <button className={styles.closeButton} onClick={close}>&times;</button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default ExperiencePopUpCard;
