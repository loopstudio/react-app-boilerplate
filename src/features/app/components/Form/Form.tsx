import { FormProvider } from 'react-hook-form';
import FormButton from './Button';
import FormInput from './Input';
import FormSelect from './Select';

import { Error, FormContent } from './Form.styles';

interface FormProps {
  children: React.ReactNode;
  onSubmit: Promise<void>;
  formMethods: any;
}

const Form = ({ children, formMethods, onSubmit, ...props }: FormProps) => {
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
