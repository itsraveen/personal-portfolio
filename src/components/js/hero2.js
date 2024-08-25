import React, { useEffect } from 'react';
import * as styles from '../css/hero2.module.css';
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
    useEffect(() => {
        // Initialize hover effects for the Typed.js strings
        document.querySelectorAll(`.${styles.role}`).forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.backgroundColor = item.getAttribute('data-hover-bg');
                // item.style.color = '#FFF'; // Set text color to white on hover
            });
            item.addEventListener('mouseleave', () => {
                item.style.backgroundColor = 'transparent';
                // item.style.color = '#333'; // Reset text color on mouse leave
            });
        });
    }, []);

    return (
        <header className={styles.hero}>
            <div className={styles.textSide}>
                <h1><span className={styles.name}>Hi! I'm Raveen Prabhu 🤠</span></h1>
                <p className={styles.roles}>
                    <span className={`${styles.role} ${styles.designer}`} data-hover-bg="#d2bbc2">designer</span>
                    <span > & </span>
                    <span className={`${styles.role} ${styles.developer}`} data-hover-bg="#ad8578">full stack developer</span>
                </p>
                <p className={styles.intro}>
                    I'm a (backend leaning) full stack developer from Singapore 🇸🇬, with experience in building web and mobile applications.
                </p>
            </div>
            <div className={styles.imageSide}>
                <StaticImage
                    alt="Raveen Prabhu, a professional in a casual setting"
                    src="../../images/profile3.png"
                />
            </div>
        </header>
    );
};

export default Hero;
