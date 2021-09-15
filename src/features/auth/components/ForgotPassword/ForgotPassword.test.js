import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

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
import ForgotPassword from './index';

const fakeEmail = 'user@example.com';
const fakeVerificationCode = '123456';
const password = 'password';

describe('ForgotPassword', () => {
  describe('on success', () => {
    it('submits correctly', async () => {
      const { history } = renderWithRouter(<ForgotPassword />, {
        history: ['/forgot-password'],
      });

      const mockGetVerificationCode = mockGetVerificationCodeSuccess(fakeEmail);

      const emailInput = screen.getByLabelText('Email');
      const resetButton = screen.getByRole('button', {
        name: 'Reset Password',
      });

      fillInput(emailInput, fakeEmail);

      fireEvent.click(resetButton);

      await waitFor(() => {
        expect(mockGetVerificationCode.isDone()).toBeTruthy();
        expect(
          screen.getByText(
            'Step 2: Enter the verification code we just sent to your email address'
          )
        ).toBeInTheDocument();
      });

      const mockVerifyToken = mockVerifyTokenSuccess(fakeVerificationCode);
      const code = screen.getByLabelText('Code');
      const nextButton = screen.getByRole('button', { name: 'Next' });

      fillInput(code, fakeVerificationCode);

      fireEvent.click(nextButton);

      await waitFor(() => {
        expect(mockVerifyToken.isDone()).toBeTruthy();
        expect(
          screen.getByText('Step 3: Enter your new password')
        ).toBeInTheDocument();
      });

      const mockResetPassword = mockResetPasswordSuccess(
        password,
        fakeVerificationCode
      );

      const passwordInput = screen.getByLabelText('Password');
      const confirmPasswordInput = screen.getByLabelText('Confirm password');

      const submitButton = screen.getByRole('button', { name: 'Next' });

      fillInput(passwordInput, password);
      fillInput(confirmPasswordInput, password);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockResetPassword.isDone()).toBeTruthy();
        expect(history.location.pathname).toEqual('/');
      });
    });
  });

  describe('on failure', () => {
    it('shows errors for invalid values', async () => {
      render(<ForgotPassword />);

      const email = screen.getByLabelText('Email');
      const submitButton = screen.getByRole('button', {
        name: 'Reset Password',
      });

      fillInput(email, 'invalid');

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('Invalid email')).toBeInTheDocument();
      });
    });

    it('shows error on email form response failure', async () => {
      render(<ForgotPassword />);

      const mockedRequest = mockGetVerificationCodeFailure(fakeEmail);

      const email = screen.getByLabelText('Email');
      const submitButton = screen.getByRole('button', {
        name: 'Reset Password',
      });

      fillInput(email, fakeEmail);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockedRequest.isDone()).toBeTruthy();
        expect(
          screen.getByText(`Unable to find user with email ${fakeEmail}`)
        ).toBeInTheDocument();
      });
    });

    it('shows error on token form response failure', async () => {
      render(<ForgotPassword />);
      const mockGetVerificationCode = mockGetVerificationCodeSuccess(fakeEmail);

      const emailInput = screen.getByLabelText('Email');
      const resetButton = screen.getByRole('button', {
        name: 'Reset Password',
      });

      fillInput(emailInput, fakeEmail);

      fireEvent.click(resetButton);

      await waitFor(() => {
        expect(mockGetVerificationCode.isDone()).toBeTruthy();
        expect(
          screen.getByText(
            'Step 2: Enter the verification code we just sent to your email address'
          )
        ).toBeInTheDocument();
      });

      const mockVerifyToken = mockVerifyTokenFailure(fakeVerificationCode);
      const code = screen.getByLabelText('Code');
      const nextButton = screen.getByRole('button', { name: 'Next' });

      fillInput(code, fakeVerificationCode);

      fireEvent.click(nextButton);

      await waitFor(() => {
        expect(mockVerifyToken.isDone()).toBeTruthy();
        expect(
          screen.getByText('The reset password token is invalid')
        ).toBeInTheDocument();
      });
    });

    it('shows error on password form response failure', async () => {
      render(<ForgotPassword />);

      const mockGetVerificationCode = mockGetVerificationCodeSuccess(fakeEmail);

      const emailInput = screen.getByLabelText('Email');
      const resetButton = screen.getByRole('button', {
        name: 'Reset Password',
      });

      fillInput(emailInput, fakeEmail);

      fireEvent.click(resetButton);

      await waitFor(() => {
        expect(mockGetVerificationCode.isDone()).toBeTruthy();
        expect(
          screen.getByText(
            'Step 2: Enter the verification code we just sent to your email address'
          )
        ).toBeInTheDocument();
      });

      const mockVerifyToken = mockVerifyTokenSuccess(fakeVerificationCode);

      const code = screen.getByLabelText('Code');
      const nextButton = screen.getByRole('button', { name: 'Next' });

      fillInput(code, fakeVerificationCode);

      fireEvent.click(nextButton);

      await waitFor(() => {
        expect(mockVerifyToken.isDone()).toBeTruthy();
        expect(
          screen.getByText('Step 3: Enter your new password')
        ).toBeInTheDocument();
      });

      const mockResetPassword = mockResetPasswordFailure(
        password,
        fakeVerificationCode
      );

      const passwordInput = screen.getByLabelText('Password');
      const confirmPasswordInput = screen.getByLabelText('Confirm password');

      const submitButton = screen.getByRole('button', { name: 'Next' });

      fillInput(passwordInput, password);
      fillInput(confirmPasswordInput, password);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockResetPassword.isDone()).toBeTruthy();
        expect(screen.getByText('Connection error')).toBeInTheDocument();
      });
    });
  });
});
