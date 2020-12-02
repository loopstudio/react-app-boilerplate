import React from 'react';
import PropTypes from 'prop-types';
import { FormProvider } from 'react-hook-form';

import FormButton from 'features/app/components/Form/Button';
import FormInput from 'features/app/components/Form/Input';
import FormSelect from 'features/app/components/Form/Select';

import { Error, FormContent } from 'features/app/components/Form/Form.styles';

const Form = ({ children, formMethods, onSubmit, ...props }) => {
  const { errors, handleSubmit } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <FormContent {...props} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </FormContent>
      {errors?.general && <Error>{errors.general.message}</Error>}
    </FormProvider>
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
