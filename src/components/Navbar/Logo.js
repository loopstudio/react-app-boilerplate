import React from 'react';

import styles from './Logo.module.scss';

const PRODUCT_NAME = 'LoopStudio';

const Logo = () => (
  <div className={styles.logo}>
    <a href="/" className={styles.brand}>
      {PRODUCT_NAME}
    </a>
  </div>
);

export default Logo;
