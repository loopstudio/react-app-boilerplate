import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render } from 'testUtils';
import AuthWrapper from '.';

describe('AuthWrapper', () => {
  it('shows a "Hello World" message on the title', () => {
    const testedNode = (
      <AuthWrapper title="Hello World">
        <div />
      </AuthWrapper>
    );

    const { getByTestId } = render(testedNode);
    const title = getByTestId('authentication-title');

    expect(title).toHaveTextContent('Hello World');
  });

  it('renders the children properly', () => {
    const testedNode = (
      <AuthWrapper title="Hello World">
        <div>Child Node</div>
      </AuthWrapper>
    );

    const { queryByText } = render(testedNode);
    expect(queryByText('Child Node')).toBeInTheDocument();
  });

  it('renders the legend properly', () => {
    const legendNode = <p>Legend Node</p>;

    const testedNode = (
      <AuthWrapper title="Hello World" renderLegend={() => legendNode}>
        <div />
      </AuthWrapper>
    );

    const { queryByText } = render(testedNode);
    expect(queryByText('Legend Node')).toBeInTheDocument();
  });
});
