import React from 'react';
import PropTypes from 'prop-types';

import Title from 'components/Title';

import styles from './Auth.module.scss';

const AuthWrapper = ({ title, children, renderLegend }) => (
  <div className={styles.screen}>
    <div className={styles.viewContainer}>
      <div className={styles.authWrapper}>
        <Title type="h1" className={styles.title}>
          {title}
        </Title>
        {children}
      </div>
      {renderLegend && (
        <div className={styles.legendContainer}>{renderLegend()}</div>
      )}
    </div>
  </div>
);

AuthWrapper.defaultProps = {
  title: '',
  renderLegend: () => {},
};

AuthWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
  renderLegend: PropTypes.func,
};

export default AuthWrapper;
