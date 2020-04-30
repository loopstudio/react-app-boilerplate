import React from 'react';
import PropTypes from 'prop-types';

import Label from './Label';

import styles from './Form.module.scss';

const FormInput = React.forwardRef(
  (
    { error, helpLinkPath, helpMessage, id, name, label, className, ...rest },
    ref
  ) => (
    <div className={error ? styles.invalid : styles.valid}>
      <label htmlFor={id} className={styles.label}>
        <Label
          name={name}
          helpLinkPath={helpLinkPath}
          helpMessage={helpMessage}
          label={label}
        />
        <input
          {...rest}
          name={name}
          className={`${styles.input} ${className}`}
          ref={ref}
        />
      </label>
      <span className={styles.error}>{error?.message}</span>
    </div>
  )
);

FormInput.defaultProps = {
  className: '',
  error: null,
  helpLinkPath: '',
  helpMessage: '',
  label: null,
  type: 'text',
};

FormInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  helpLinkPath: PropTypes.string,
  helpMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormInput;
