import React from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';

import { Button } from './Form.styles';

const FormButton = React.forwardRef(
  ({ isDisabled, isLoading, text, ...rest }, ref) => (
    <Button
      ref={ref}
      type="submit"
      disabled={isDisabled || isLoading}
      {...rest}
    >
      {isLoading ? <Loading /> : text}
    </Button>
  )
);

FormButton.defaultProps = {
  isDisabled: false,
  isLoading: false,
};

FormButton.propTypes = {
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default FormButton;
