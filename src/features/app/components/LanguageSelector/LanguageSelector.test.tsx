import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import { render } from 'testUtils';
import LanguageSelector from './LanguageSelector';

describe('LanguageSelector', () => {
  it('renders the select component with the correct label', () => {
    render(<LanguageSelector />);
    expect(screen.queryByLabelText('Select language')).toBeInTheDocument();
  });

  it('displays the correct language options', () => {
    render(<LanguageSelector />);
    const selector = screen.getByLabelText('Select language');

    expect(selector.childElementCount).toBe(2);
    expect(screen.queryByText('Español')).toBeInTheDocument();
    expect(screen.queryByText('English')).toBeInTheDocument();
  });
});
