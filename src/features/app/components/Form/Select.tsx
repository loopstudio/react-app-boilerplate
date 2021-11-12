import { SelectHTMLAttributes } from 'react';
import { useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';

import InputLabel from './InputLabel';

import { Error, InputContainer, Select } from './Form.styles';

interface Option {
  label: string;
  value: string;
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  name: string;
  label?: string;
  options: Array<Option>;
}

const FormSelect = ({ id, name, options, label, ...rest }: FormSelectProps) => {
  const { formatMessage } = useIntl();
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
        aria-label={formatMessage({ id: `common.${name}` })}
        {...register(name)}
      >
        <option value="">{formatMessage({ id: 'common.selectOption' })}</option>
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

export default FormSelect;
