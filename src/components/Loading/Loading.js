import React from 'react';

import styles from './Loading.module.scss';

const Loading = () => (
  <div className={styles.wrapper}>
    <div className={styles.spinner}>
      <div className={styles.doubleBounce1} />
      <div className={styles.doubleBounce2} />
    </div>
  </div>
);

export default Loading;
