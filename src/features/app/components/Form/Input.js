import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import InputLabel from './InputLabel';

import { Error, Input, InputContainer } from './Form.styles';

const FormInput = ({ helpLinkPath, helpMessage, id, name, label, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];
  const { ref, ...registerRest } = register(name);

  return (
    <InputContainer hasError={Boolean(error)}>
      <InputLabel
        helpLinkPath={helpLinkPath}
        helpMessage={helpMessage}
        htmlFor={id ?? name}
        label={label}
        name={name}
      />
      <Input {...rest} id={id ?? name} {...registerRest} inputRef={ref} />
      <Error>{error?.message}</Error>
    </InputContainer>
  );
};

FormInput.defaultProps = {
  helpLinkPath: '',
  helpMessage: '',
  id: null,
  label: null,
  type: 'text',
};

FormInput.propTypes = {
  helpLinkPath: PropTypes.string,
  helpMessage: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormInput;
