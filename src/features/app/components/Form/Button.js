import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Loading from 'features/app/components/Loading';

import {
  Button,
  loadingStyles,
} from 'features/app/components/Form/Form.styles';

const FormButton = forwardRef(
  ({ isDisabled, isLoading, text, ...rest }, ref) => (
    <Button
      ref={ref}
      type="submit"
      disabled={isDisabled || isLoading}
      {...rest}
    >
      {isLoading ? <Loading styles={loadingStyles} /> : text}
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
