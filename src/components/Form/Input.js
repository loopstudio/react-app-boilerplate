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
      <span className={styles.error}>{error}</span>
    </div>
  )
);

FormInput.defaultProps = {
  className: '',
  error: '',
  helpLinkPath: '',
  helpMessage: '',
  label: null,
  type: 'text',
  value: '',
};

FormInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  helpLinkPath: PropTypes.string,
  helpMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default FormInput;
