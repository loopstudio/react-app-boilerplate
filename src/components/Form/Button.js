import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.scss';

const FormButton = React.forwardRef(({ isDisabled, text, className }, ref) => (
  <button
    ref={ref}
    type="submit"
    data-testid="submit-button"
    className={`${styles.button} ${className}`}
    disabled={isDisabled}
  >
    {text}
  </button>
));

FormButton.defaultProps = {
  isDisabled: false,
  className: '',
};

FormButton.propTypes = {
  isDisabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default FormButton;
