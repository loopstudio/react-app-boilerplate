import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import InputLabel from './InputLabel';

import { Error, Input, InputContainer } from './Form.styles';

const FormInput = ({ id, name, label, ...rest }) => {
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

FormInput.defaultProps = {
  id: null,
  label: null,
  type: 'text',
};

FormInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormInput;
