import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render } from 'testUtils';
import Title from '.';

describe('Title', () => {
  it('renders a Hello World message', () => {
    const { queryByText } = render(<Title>Hello World</Title>);

    expect(queryByText('Hello World')).toBeInTheDocument();
  });
});
