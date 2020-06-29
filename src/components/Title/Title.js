import React from 'react';
import PropTypes from 'prop-types';

import { StyledTitle } from './Title.styles';

const Title = ({ type, children, className, ...rest }) => (
  <StyledTitle as={type} className={className} {...rest}>
    {children}
  </StyledTitle>
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
