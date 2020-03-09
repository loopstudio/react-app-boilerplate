import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'components/Navbar';

import styles from './AuthLayout.module.scss';

const AuthLayout = ({ children, noHeader }) => (
  <>
    {!noHeader && <Navbar />}
    <div className={noHeader ? styles.noHeader : styles.authContainer}>
      {children}
    </div>
  </>
);

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
  noHeader: PropTypes.bool,
};

AuthLayout.defaultProps = {
  noHeader: false,
};

export default AuthLayout;
