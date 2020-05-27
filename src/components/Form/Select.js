import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';

import Label from './Label';

import styles from './Form.module.scss';

const FormSelect = ({
  helpLinkPath,
  helpMessage,
  id,
  name,
  options,
  label,
  ...rest
}) => {
  const intl = useIntl();
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
        <select
          {...rest}
          id={id ?? name}
          aria-label={intl.messages[`common.${name}`]}
          name={name}
          className={styles.input}
          ref={register}
        >
          <option value="">{intl.messages['common.selectOption']}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <span className={styles.error}>{error?.message}</span>
    </div>
  );
};

FormSelect.defaultProps = {
  helpLinkPath: '',
  id: null,
  helpMessage: '',
  label: null,
};

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  helpLinkPath: PropTypes.string,
  id: PropTypes.string,
  helpMessage: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FormSelect;
