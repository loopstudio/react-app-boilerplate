import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import Label from './Label';

import styles from './Form.module.scss';

const FormInput = ({
  helpLinkPath,
  helpMessage,
  id,
  name,
  label,
  className,
  ...rest
}) => {
  const { register, errors } = useFormContext();
  const error = errors[name];

  return (
    <div className={error ? styles.invalid : styles.valid}>
      <label htmlFor={id ?? name} className={styles.label}>
        <Label
          name={name}
          helpLinkPath={helpLinkPath}
          helpMessage={helpMessage}
          label={label}
        />
        <input
          {...rest}
          id={id ?? name}
          name={name}
          className={`${styles.input} ${className}`}
          ref={register}
        />
      </label>
      <span className={styles.error}>{error?.message}</span>
    </div>
  );
};

FormInput.defaultProps = {
  className: '',
  helpLinkPath: '',
  helpMessage: '',
  id: null,
  label: null,
  type: 'text',
};

FormInput.propTypes = {
  className: PropTypes.string,
  helpLinkPath: PropTypes.string,
  helpMessage: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormInput;
