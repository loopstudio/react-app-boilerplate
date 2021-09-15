/* eslint-disable no-console */
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import { render } from 'testUtils';
import ErrorBoundary from './ErrorBoundary';

const Throw = () => {
  throw new Error('Dummy error');
};

describe('ErrorBoundary', () => {
  it('shows the detail of the error on the screen', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    const errorBoundary = (
      <ErrorBoundary>
        <Throw />
      </ErrorBoundary>
    );

    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});
    render(errorBoundary);
    console.error.mockRestore();

    expect(screen.queryByText('An error occurred')).toBeInTheDocument();
    expect(screen.queryByText('Dummy error')).toBeInTheDocument();
    expect(screen.queryByText('Report error')).toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });

  it('shows a general message on the screen', () => {
    const errorBoundary = (
      <ErrorBoundary>
        <Throw />
      </ErrorBoundary>
    );

    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});
    render(errorBoundary);
    console.error.mockRestore();

    expect(screen.queryByText('An error occurred')).toBeInTheDocument();
    expect(screen.queryByText('Dummy error')).toBeNull();
    expect(screen.queryByText('Report error')).toBeNull();
  });
});
