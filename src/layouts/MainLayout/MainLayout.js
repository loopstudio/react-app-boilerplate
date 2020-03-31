import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'components/Navbar';

import styles from './MainLayout.module.scss';

const MainLayout = ({ children, noHeader }) => (
  <>
    {!noHeader && <Navbar />}
    <div className={noHeader ? styles.noHeader : styles.mainContainer}>
      {children}
    </div>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  noHeader: PropTypes.bool,
};

MainLayout.defaultProps = {
  noHeader: false,
};

export default MainLayout;
