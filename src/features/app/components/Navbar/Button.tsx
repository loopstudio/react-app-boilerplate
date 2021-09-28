import { ButtonHTMLAttributes } from 'react';
import { FormattedMessage } from 'react-intl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  formattedMessageId: string;
}
const Button = ({ onClick, formattedMessageId }: ButtonProps) => (
  <button data-testid="generic-button" onClick={onClick} type="button">
    <FormattedMessage id={formattedMessageId} />
  </button>
);

export default Button;
