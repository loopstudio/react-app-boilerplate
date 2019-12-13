import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return children;
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
