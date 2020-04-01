import React from 'react';

import Logo from './Logo';
import UserOptions from './UserOptions';

import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.navContent}>
      <Logo />
      <UserOptions />
    </div>
  </nav>
);

export default Navbar;
