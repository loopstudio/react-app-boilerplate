import { LabelHTMLAttributes } from 'react';
import { FormattedMessage, MessageFormatElement } from 'react-intl';

import { Label, LabelContent, Span } from './Form.styles';

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  name: string;
  label?: string | MessageFormatElement[];
}

const InputLabel = ({ htmlFor, name, label }: InputLabelProps) => (
  <LabelContent>
    <Label htmlFor={htmlFor}>
      <Span>{label ?? <FormattedMessage id={`common.${name}`} />}</Span>
    </Label>
  </LabelContent>
);

export default InputLabel;
