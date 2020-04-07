import React from 'react';
import PropTypes from 'prop-types';

import FormInput from './Input';
import FormSelect from './Select';
import FormButton from './Button';

const Form = ({ onSubmit, children, ...props }) => (
  <form {...props} onSubmit={onSubmit}>
    {children}
  </form>
);

Form.displayName = 'CustomForm';
Form.Input = FormInput;
Form.Select = FormSelect;
Form.Button = FormButton;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

export default Form;
