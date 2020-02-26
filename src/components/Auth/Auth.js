import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import styles from './Auth.module.scss';

const AuthContainer = ({ title, children, renderLegend }) => {
  return (
    <div className={styles.screen}>
      <div className={styles.viewContainer}>
        <div className={styles.authContainer}>
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
};

AuthContainer.defaultProps = {
  title: '',
  renderLegend: () => {},
};

AuthContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
  renderLegend: PropTypes.func,
};

export default AuthContainer;
