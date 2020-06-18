import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

const PRODUCT_NAME = 'LoopStudio';

const Logo = () => (
  <div className={styles.logo}>
    <Link to="/" className={styles.brand}>
      {PRODUCT_NAME}
    </Link>
  </div>
);

export default Logo;
