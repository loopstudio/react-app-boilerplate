import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import {
  fillInput,
  fireEvent,
  render,
  renderWithRouter,
  waitFor,
} from 'testUtils';
import {
  mockGetVerificationCodeSuccess,
  mockGetVerificationCodeFailure,
  mockVerifyTokenSuccess,
  mockVerifyTokenFailure,
  mockResetPasswordSuccess,
  mockResetPasswordFailure,
} from 'testUtils/mocks/auth';
import ForgotPassword from '.';

const fakeEmail = 'user@example.com';
const fakeVerificationCode = '123456';
const password = 'password';

describe('ForgotPassword', () => {
  it('submits correctly', async () => {
    const {
      getByLabelText,
      getByRole,
      getByText,
      history,
    } = renderWithRouter(<ForgotPassword />, { history: ['/forgot-password'] });

    const mockGetVerificationCode = mockGetVerificationCodeSuccess(fakeEmail);

    const emailInput = getByLabelText('Email');
    const resetButton = getByRole('button', { name: 'Reset Password' });

    fillInput(emailInput, fakeEmail);

    fireEvent.click(resetButton);

    await waitFor(() => {
      expect(mockGetVerificationCode.isDone()).toBeTruthy();
      expect(
        getByText(
          'Step 2: Enter the verification code we just sent to your email address'
        )
      ).toBeInTheDocument();
    });

    const mockVerifyToken = mockVerifyTokenSuccess(fakeVerificationCode);
    const code = getByLabelText('Code');
    const nextButton = getByRole('button', { name: 'Next' });

    fillInput(code, fakeVerificationCode);

    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(mockVerifyToken.isDone()).toBeTruthy();
      expect(getByText('Step 3: Enter your new password')).toBeInTheDocument();
    });

    const mockResetPassword = mockResetPasswordSuccess(
      password,
      fakeVerificationCode
    );

    const passwordInput = getByLabelText('Password');
    const confirmPasswordInput = getByLabelText('Confirm password');

    const submitButton = getByRole('button', { name: 'Next' });

    fillInput(passwordInput, password);
    fillInput(confirmPasswordInput, password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockResetPassword.isDone()).toBeTruthy();
      expect(history.location.pathname).toEqual('/');
    });
  });

  it('shows errors for invalid values', async () => {
    const { getByLabelText, getByRole, getByText } = render(<ForgotPassword />);

    const email = getByLabelText('Email');
    const submitButton = getByRole('button', { name: 'Reset Password' });

    fillInput(email, 'invalid');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('Invalid email')).toBeInTheDocument();
    });
  });

  it('shows error on email form response failure', async () => {
    const { getByLabelText, getByRole, getByText } = render(<ForgotPassword />);

    const mockedRequest = mockGetVerificationCodeFailure(fakeEmail);

    const email = getByLabelText('Email');
    const submitButton = getByRole('button', { name: 'Reset Password' });

    fillInput(email, fakeEmail);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(
        getByText(`Unable to find user with email ${fakeEmail}`)
      ).toBeInTheDocument();
    });
  });

  it('shows error on token form response failure', async () => {
    const { getByLabelText, getByRole, getByText } = render(<ForgotPassword />);
    const mockGetVerificationCode = mockGetVerificationCodeSuccess(fakeEmail);

    const emailInput = getByLabelText('Email');
    const resetButton = getByRole('button', { name: 'Reset Password' });

    fillInput(emailInput, fakeEmail);

    fireEvent.click(resetButton);

    await waitFor(() => {
      expect(mockGetVerificationCode.isDone()).toBeTruthy();
      expect(
        getByText(
          'Step 2: Enter the verification code we just sent to your email address'
        )
      ).toBeInTheDocument();
    });

    const mockVerifyToken = mockVerifyTokenFailure(fakeVerificationCode);
    const code = getByLabelText('Code');
    const nextButton = getByRole('button', { name: 'Next' });

    fillInput(code, fakeVerificationCode);

    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(mockVerifyToken.isDone()).toBeTruthy();
      expect(
        getByText('the reset password token is invalid')
      ).toBeInTheDocument();
    });
  });

  it('shows error on password form response failure', async () => {
    const { getByLabelText, getByRole, getByText } = render(<ForgotPassword />);

    const mockGetVerificationCode = mockGetVerificationCodeSuccess(fakeEmail);

    const emailInput = getByLabelText('Email');
    const resetButton = getByRole('button', { name: 'Reset Password' });

    fillInput(emailInput, fakeEmail);

    fireEvent.click(resetButton);

    await waitFor(() => {
      expect(mockGetVerificationCode.isDone()).toBeTruthy();
      expect(
        getByText(
          'Step 2: Enter the verification code we just sent to your email address'
        )
      ).toBeInTheDocument();
    });

    const mockVerifyToken = mockVerifyTokenSuccess(fakeVerificationCode);

    const code = getByLabelText('Code');
    const nextButton = getByRole('button', { name: 'Next' });

    fillInput(code, fakeVerificationCode);

    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(mockVerifyToken.isDone()).toBeTruthy();
      expect(getByText('Step 3: Enter your new password')).toBeInTheDocument();
    });

    const mockResetPassword = mockResetPasswordFailure(
      password,
      fakeVerificationCode
    );

    const passwordInput = getByLabelText('Password');
    const confirmPasswordInput = getByLabelText('Confirm password');

    const submitButton = getByRole('button', { name: 'Next' });

    fillInput(passwordInput, password);
    fillInput(confirmPasswordInput, password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockResetPassword.isDone()).toBeTruthy();
      expect(getByText('Connection error')).toBeInTheDocument();
    });
  });
});
