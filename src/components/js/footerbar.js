import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import * as styles from '../css/footerbar.module.css'; // Import CSS module

const FooterBar = () => {
  return (
    <div className={styles.footerBar}> 
      <div className={styles.content}> 
        <h1>Raveen Prabhu</h1>
        <p>Full-Stack Developer</p>
        <div className={styles.icons}> 
          <a href="https://www.linkedin.com/in/raveenprabhu/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/itsraveen" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:raveenprabhu99@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
