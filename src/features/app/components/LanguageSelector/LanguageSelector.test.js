import '@testing-library/jest-dom/extend-expect';

import { render } from 'testUtils';
import LanguageSelector from './LanguageSelector';

describe('LanguageSelector', () => {
  it('renders the select component with the correct label', () => {
    const { queryByLabelText } = render(<LanguageSelector />);
    expect(queryByLabelText('Select language')).toBeInTheDocument();
  });

  it('displays the correct language options', () => {
    const { getByLabelText, queryByText } = render(<LanguageSelector />);
    const selector = getByLabelText('Select language');

    expect(selector.childElementCount).toBe(2);
    expect(queryByText('Español')).toBeInTheDocument();
    expect(queryByText('English')).toBeInTheDocument();
  });
});
