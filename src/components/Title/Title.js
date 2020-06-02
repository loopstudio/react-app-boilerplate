import React from 'react';
import PropTypes from 'prop-types';

import style from './Title.module.scss';

const Title = ({ type, children, className, ...rest }) =>
  React.createElement(
    type,
    {
      className: `${style[type]} ${className}`,
      ...rest,
    },
    children
  );

Title.defaultProps = {
  type: 'h1',
  className: '',
};

Title.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  className: PropTypes.string,
};

export default Title;
