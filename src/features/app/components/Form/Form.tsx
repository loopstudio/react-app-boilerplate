import { FormHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { SerializedStyles } from '@emotion/react';

import FormButton from './Button';
import FormInput from './Input';
import FormSelect from './Select';

import { Error, FormContent } from './Form.styles';

interface FormProps<TFormValues> {
  children: React.ReactNode;
  formMethods: UseFormReturn<TFormValues>; // como tipar esto dinamicamente para q se sepa q es una funcion q recibe ciertos parametros en base a los form values? (a ver, capaz no nos interesa saberlo igual...)
  onSubmit: SubmitHandler<TFormValues>; // lo mismo
  styles?: SerializedStyles;
}

const Form = ({ children, formMethods, onSubmit, ...props }) => {
  const {
    formState: { errors },
    handleSubmit,
  } = formMethods;

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

export default Form;
