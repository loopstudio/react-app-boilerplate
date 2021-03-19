import PropTypes from 'prop-types';
import { FormProvider } from 'react-hook-form';

import FormButton from './Button';
import FormInput from './Input';
import FormSelect from './Select';

import { Error, FormContent } from './Form.styles';

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
