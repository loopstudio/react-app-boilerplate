import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import { MessageFormatElement } from 'react-intl';
import { SerializedStyles } from '@emotion/react';

import Loading from '../Loading';

import { Button, loadingStyles } from './Form.styles';

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  isLoading?: boolean;
  text: string | MessageFormatElement[];
  styles?: SerializedStyles;
}

const FormButton = forwardRef(
  (
    { isDisabled, isLoading, text, ...rest }: FormButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => (
    <Button
      ref={ref}
      type="submit"
      disabled={isDisabled || isLoading}
      {...rest}
    >
      {isLoading ? <Loading styles={loadingStyles} /> : text}
    </Button>
  )
);

export default FormButton;
