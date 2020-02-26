import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';

const FormButton = React.forwardRef(({ isDisabled, text }, ref) => {
  return (
    <button
      ref={ref}
      type="submit"
      data-testid="submit-button"
      className={styles.button}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
});

FormButton.defaultProps = {
  isDisabled: false,
};

FormButton.propTypes = {
  isDisabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default FormButton;
