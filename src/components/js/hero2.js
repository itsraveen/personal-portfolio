import React, { useEffect } from 'react';
import * as styles from '../css/hero2.module.css';
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
    useEffect(() => {
        // Initialize hover effects for the Typed.js strings
        document.querySelectorAll(`.${styles.role}`).forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.backgroundColor = item.getAttribute('data-hover-bg');
            });
            item.addEventListener('mouseleave', () => {
                item.style.backgroundColor = 'transparent';
            });
        });
    }, []);

    return (
        <header className={styles.hero}>
            <div className={styles.textSide}>
                <h1><span className={styles.name}>Hi! I'm Raveen Prabhu 🤠</span></h1>
                <p className={styles.roles}>
                    <span className={`${styles.role} ${styles.designer}`} data-hover-bg="#F0E68C">designer</span>
                    <span className={`${styles.role} ${styles.and}`} data-hover-bg=""> & </span>
                    <span className={`${styles.role} ${styles.developer}`} data-hover-bg="#FFC0CB">full stack developer</span>,
                </p>
                <p className={styles.intro}>
                    I'm a (backend leaning) full stack developer from Singapore 🇸🇬, with experience in building web and mobile applications.
                </p>
            </div>
            <div className={styles.imageSide}>
                <StaticImage
                    alt="Raveen Prabhu, a professional in a casual setting"
                    src="../../images/profile.png"
                />
            </div>
        </header>
    );
};

export default Hero;
