import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';

import InputLabel from './InputLabel';

import { Error, InputContainer, Select } from './Form.styles';

const FormSelect = ({
  helpLinkPath,
  helpMessage,
  id,
  name,
  options,
  label,
  ...rest
}) => {
  const intl = useIntl();
  const { register, errors } = useFormContext();
  const error = errors[name];

  return (
    <InputContainer hasError={Boolean(error)}>
      <InputLabel
        helpLinkPath={helpLinkPath}
        helpMessage={helpMessage}
        htmlFor={id ?? name}
        label={label}
        name={name}
      />
      <Select
        {...rest}
        id={id ?? name}
        aria-label={intl.messages[`common.${name}`]}
        name={name}
        ref={register}
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
  helpLinkPath: '',
  id: null,
  helpMessage: '',
  label: null,
};

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  helpLinkPath: PropTypes.string,
  id: PropTypes.string,
  helpMessage: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FormSelect;
