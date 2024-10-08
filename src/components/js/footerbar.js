import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import * as styles from '../css/footerbar.module.css';

const FooterBar = () => {
  return (
    <div className={styles.footerBar}>
      <div className={styles.content}>
        <h1>Raveen Prabhu</h1>
        <h2>Full-Stack Developer</h2>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/raveenprabhu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/itsraveen" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:raveenprabhu99@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p className={styles.builtby}>
          Built with React & Gatsby for Desktop.
          Icons by <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer">Icons8</a>
        </p>
      </div>
    </div>
  );
};

export default FooterBar;