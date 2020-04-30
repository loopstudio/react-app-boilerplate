import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Label from './Label';

import styles from './Form.module.scss';

const FormSelect = React.forwardRef(
  (
    {
      error,
      helpLinkPath,
      helpMessage,
      id,
      name,
      options,
      value,
      label,
      ...rest
    },
    ref
  ) => {
    const intl = useIntl();

    return (
      <div className={error ? styles.invalid : styles.valid}>
        <label htmlFor={id} className={styles.label}>
          <Label
            name={name}
            helpLinkPath={helpLinkPath}
            helpMessage={helpMessage}
            label={label}
          />
          <select
            {...rest}
            aria-label={intl.messages[`common.${name}`]}
            name={name}
            className={styles.input}
            ref={ref}
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
  }
);

FormSelect.defaultProps = {
  error: '',
  value: '',
  helpLinkPath: '',
  helpMessage: '',
  label: null,
};

FormSelect.propTypes = {
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  helpLinkPath: PropTypes.string,
  id: PropTypes.string.isRequired,
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
