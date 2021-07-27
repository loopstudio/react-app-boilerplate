import { LabelHTMLAttributes } from 'react';
import { FormattedMessage } from 'react-intl';

import { Label, LabelContent, Span } from './Form.styles';

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  name: string;
  label?: string;
}

const InputLabel = ({ htmlFor, name, label, ...rest }: InputLabelProps) => (
  <LabelContent>
    <Label htmlFor={htmlFor} {...rest}>
      <Span>{label ?? <FormattedMessage id={`common.${name}`} />}</Span>
    </Label>
  </LabelContent>
);

export default InputLabel;
