import React from 'react';
import PropTypes from 'prop-types';
import { FormContext } from 'react-hook-form';

import FormButton from './Button';
import FormInput from './Input';
import FormSelect from './Select';

import styles from './Form.module.scss';

const Form = ({ children, formMethods, onSubmit, ...props }) => {
  const { errors, handleSubmit } = formMethods;

  return (
    <FormContext {...formMethods}>
      <form {...props} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
      {errors?.general && (
        <p className={styles.error}>{errors.general.message}</p>
      )}
    </FormContext>
  );
};

Form.displayName = 'CustomForm';
Form.Button = FormButton;
Form.Input = FormInput;
Form.Select = FormSelect;

Form.propTypes = {
  children: PropTypes.node.isRequired,
  formMethods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
