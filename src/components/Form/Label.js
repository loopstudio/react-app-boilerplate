import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import styles from './Form.module.scss';

const Label = ({ helpLinkPath, helpMessage, name, label }) => (
  <div className={styles.labelContainer}>
    <span className={styles.span}>
      {label || <FormattedMessage id={`common.${name}`} />}
    </span>
    {helpLinkPath && (
      <Link className={styles.link} to={helpLinkPath}>
        {helpMessage}
      </Link>
    )}
  </div>
);

Label.defaultProps = {
  helpLinkPath: '',
  helpMessage: '',
  label: null,
};

Label.propTypes = {
  name: PropTypes.string.isRequired,
  helpLinkPath: PropTypes.string,
  helpMessage: PropTypes.string,
  label: PropTypes.string,
};

export default Label;
