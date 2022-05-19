import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

import InputLabel from './InputLabel';

import { Error, Input, InputContainer } from './Form.styles';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label?: string;
}

const FormInput = ({ id, name, label, ...rest }: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <InputContainer hasError={Boolean(error)}>
      <InputLabel htmlFor={id ?? name} label={label} name={name} />
      <Input {...rest} id={id ?? name} {...register(name)} />
      <Error>{error?.message}</Error>
    </InputContainer>
  );
};

export default FormInput;
