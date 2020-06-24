import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Form.styles';

const FormButton = React.forwardRef(({ isDisabled, text, ...rest }, ref) => (
  <Button ref={ref} type="submit" disabled={isDisabled} {...rest}>
    {text}
  </Button>
));

FormButton.defaultProps = {
  isDisabled: false,
};

FormButton.propTypes = {
  isDisabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default FormButton;
