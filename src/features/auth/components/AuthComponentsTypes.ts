import { ReactNode } from 'react';
import { MessageFormatElement } from 'react-intl';

export interface AuthWrapperProps {
  title: string | MessageFormatElement[];
  children: ReactNode;
  renderLegend: () => ReactNode;
}

export interface EmailFormProps {
  onStepChange: (param: number) => void;
}
export interface EmailType {
  email: string;
}
