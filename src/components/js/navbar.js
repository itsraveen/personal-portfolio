import React from 'react';
import { Link } from 'gatsby';

import * as styles from '../css/navbar.module.css';

const Navbar = () => {
  return (
    <nav id="navbar" className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <Link to="/" className={styles.navbarLink}>
          <span className={styles.navbarBrand}>Raveen Prabhu</span>
        </Link>
      </div>
      <div className={styles.navbarRight}>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarItem}>
            <Link to="/" className={styles.navbarLink}>Home</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/about" className={styles.navbarLink}>About</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/experience-page" className={styles.navbarLink}>Experience</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
