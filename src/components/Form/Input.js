import React from 'react';
import PropTypes from 'prop-types';

import Label from './Label';

import styles from './Form.module.scss';

const FormInput = React.forwardRef(
  ({ error, helpLinkPath, helpMessage, id, name, label, ...rest }, ref) => (
    <div className={error ? styles.invalid : styles.valid}>
      <label htmlFor={id} className={styles.label}>
        <Label
          name={name}
          helpLinkPath={helpLinkPath}
          helpMessage={helpMessage}
          label={label}
        />
        <input {...rest} name={name} className={styles.input} ref={ref} />
      </label>
      <span className={styles.error}>{error}</span>
    </div>
  )
);

FormInput.defaultProps = {
  error: '',
  value: '',
  type: 'text',
  helpLinkPath: '',
  helpMessage: '',
  label: null,
};

FormInput.propTypes = {
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  helpLinkPath: PropTypes.string,
  id: PropTypes.string.isRequired,
  helpMessage: PropTypes.string,
  label: PropTypes.string,
};

export default FormInput;
