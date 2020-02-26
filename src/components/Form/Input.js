import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import styles from './Form.module.scss';

const FormInput = React.forwardRef(
  ({ error, helpLinkPath, helpMessage, id, name, ...rest }, ref) => {
    return (
      <div className={error ? styles.invalid : styles.valid}>
        <label htmlFor={id} className={styles.label}>
          <div className={styles.labelContainer}>
            <span className={styles.span}>
              <FormattedMessage id={`common.${name}`} />
            </span>
            {helpLinkPath && (
              <Link className={styles.link} to={helpLinkPath}>
                {helpMessage}
              </Link>
            )}
          </div>
          <input {...rest} name={name} className={styles.input} ref={ref} />
        </label>
        <span className={styles.error}>{error}</span>
      </div>
    );
  }
);

FormInput.defaultProps = {
  error: '',
  value: '',
  type: 'text',
  helpLinkPath: '',
  helpMessage: '',
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
};

export default FormInput;
