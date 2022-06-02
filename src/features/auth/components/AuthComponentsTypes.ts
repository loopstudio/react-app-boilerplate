import { ReactNode } from 'react';

export interface AuthWrapperProps {
  title: string;
  children: ReactNode;
  renderLegend: () => ReactNode;
}
