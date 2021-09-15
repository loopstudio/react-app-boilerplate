import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import { render } from 'testUtils';
import AuthWrapper from 'features/auth/components/AuthWrapper/index';

describe('AuthWrapper', () => {
  it('shows a "Hello World" message on the title', () => {
    const testedNode = (
      <AuthWrapper title="Hello World">
        <div />
      </AuthWrapper>
    );

    render(testedNode);
    const title = screen.getByTestId('authentication-title');

    expect(title).toHaveTextContent('Hello World');
  });

  it('renders the children properly', () => {
    const testedNode = (
      <AuthWrapper title="Hello World">
        <div>Child Node</div>
      </AuthWrapper>
    );

    render(testedNode);
    expect(screen.queryByText('Child Node')).toBeInTheDocument();
  });

  it('renders the legend properly', () => {
    const legendNode = <p>Legend Node</p>;

    const testedNode = (
      <AuthWrapper title="Hello World" renderLegend={() => legendNode}>
        <div />
      </AuthWrapper>
    );

    render(testedNode);
    expect(screen.queryByText('Legend Node')).toBeInTheDocument();
  });
});
