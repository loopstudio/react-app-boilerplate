import React from 'react';
import PropTypes from 'prop-types';
import { FormContext } from 'react-hook-form';

import FormInput from './Input';
import FormSelect from './Select';
import FormButton from './Button';

const Form = ({ onSubmit, children, formMethods, ...props }) => {
  const { handleSubmit } = formMethods;

  return (
    <FormContext {...formMethods}>
      <form {...props} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormContext>
  );
};

Form.displayName = 'CustomForm';
Form.Input = FormInput;
Form.Select = FormSelect;
Form.Button = FormButton;

Form.propTypes = {
  formMethods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
};

export default Form;
