import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Menu } from 'lucide-react';

import * as styles from '../css/navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
  
    handleResize(); // Run the function on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link to="/" className={styles.navbarLink}>
          <span className={styles.navbarBrand}>Raveen Prabhu</span>
        </Link>
      </div>
      {isMobile ? (
        <>
          <div className={styles.navbarRight}>
            {/* <button className={styles.menuButton} onClick={toggleMenu}>
              <Menu size={24} />
            </button> */}

            <button className={styles.menuButton} onClick={toggleMenu}>
              ☰ {/* Temporary replacement for testing */}
            </button>

          </div>
          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              <ul className={styles.mobileNavbarMenu}>
                <li className={styles.mobileNavbarItem}>
                  <Link to="/" className={styles.navbarLink}>Home</Link>
                </li>
                <li className={styles.mobileNavbarItem}>
                  <Link to="/about" className={styles.navbarLink}>About</Link>
                </li>
                <li className={styles.mobileNavbarItem}>
                  <Link to="/experience" className={styles.navbarLink}>Experiences</Link>
                </li>
                <li className={styles.mobileNavbarItem}>
                  <Link to="/projects" className={styles.navbarLink}>Projects</Link>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <div className={styles.navbarRight}>
          <ul className={styles.navbarMenu}>
            <li className={styles.navbarItem}>
              <Link to="/" className={styles.navbarLink}>Home</Link>
            </li>
            <li className={styles.navbarItem}>
              <Link to="/about" className={styles.navbarLink}>About</Link>
            </li>
            <li className={styles.navbarItem}>
              <Link to="/experience" className={styles.navbarLink}>Experiences</Link>
            </li>
            <li className={styles.navbarItem}>
              <Link to="/projects" className={styles.navbarLink}>Projects</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
