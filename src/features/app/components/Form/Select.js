import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';

import InputLabel from './InputLabel';

import { Error, InputContainer, Select } from './Form.styles';

const FormSelect = ({ id, name, options, label, ...rest }) => {
  const intl = useIntl();
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <InputContainer hasError={Boolean(error)}>
      <InputLabel htmlFor={id ?? name} label={label} name={name} />
      <Select
        {...rest}
        id={id ?? name}
        aria-label={intl.messages[`common.${name}`]}
        {...register(name)}
      >
        <option value="">{intl.messages['common.selectOption']}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Error>{error?.message}</Error>
    </InputContainer>
  );
};

FormSelect.defaultProps = {
  id: null,
  label: null,
};

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FormSelect;
