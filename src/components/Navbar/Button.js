import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Button = ({ onClick, formattedMessageId }) => (
  <button onClick={onClick} type="button">
    <FormattedMessage id={formattedMessageId} />
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  formattedMessageId: PropTypes.string.isRequired,
};

export default Button;
