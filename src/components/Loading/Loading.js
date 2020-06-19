import React from 'react';
import PropTypes from 'prop-types';

import styles from './Loading.module.scss';

const Loading = ({ className }) => (
  <div className={`${styles.wrapper} ${className}`}>
    <div className={styles.spinner}>
      <div className={styles.doubleBounce1} />
      <div className={styles.doubleBounce2} />
    </div>
  </div>
);

Loading.defaultProps = {
  className: '',
};

Loading.propTypes = {
  className: PropTypes.string,
};

export default Loading;
