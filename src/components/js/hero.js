import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Import Typed.js library
import * as styles from '../css/hero.module.css';
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  useEffect(() => {
    // Check if Typed element exists in the DOM
    const typedElement = document.querySelector('.typed');
    
    if (typedElement) {
      // Get the typed strings from the data attribute
      let typedStrings = typedElement.getAttribute('data-typed-items').split(',');

      // Initialize Typed.js
      new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }, []);

  return (
    <header className={styles.hero}>
      <div className={styles.textSide}>
        <h1>
          <span className={styles.name}>Raveen Prabhu</span>
          <span className="typed" data-typed-items="I'm a Developer,I'm a Designer,I'm an Entrepreneur,I'm a Learner"></span>
        </h1>
      </div>
      <div className={styles.imageSide}>
        <StaticImage
          alt="A picture of Raveen"
          src="../../images/profile4.png"
        />
      </div>
    </header>
  );
};

export default Hero;
