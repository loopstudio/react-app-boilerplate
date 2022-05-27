import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';

import { fillInput, fireEvent, render, waitFor } from 'testUtils';
import {
  mockUpdateUserSuccess,
  mockUpdateUserFailure,
} from 'testUtils/mocks/auth';
import Settings from './Settings';

const fakeSettingsData = {
  firstName: 'John',
  lastName: 'Smith',
  locale: 'es',
};

const fakePasswordData = {
  user: {
    password: 'password1234',
  },
  passwordCheck: 'oldPass',
};

const fakeState = {
  auth: {
    user: {
      id: 1,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      locale: 'en',
      createdAt: '2020-04-21T21:20:35.663-04:00',
      updatedAt: '2020-04-21T22:22:56.291-04:00',
    },
    session: {
      uid: 'jane.doe@example.com',
      client: 'client',
      accessToken: 'token',
    },
    guestLocale: 'en',
  },
};

describe('Settings', () => {
  describe('account settings', () => {
    it('confirms when account settings were changed successfully', async () => {
      const mockedRequest = mockUpdateUserSuccess(fakeSettingsData);

      render(<Settings />, {
        state: fakeState,
      });

      const firstName = screen.getByLabelText('First Name');
      const lastName = screen.getByLabelText('Last Name');
      const locale = screen.getByLabelText('Language');
      const submitButton = screen.getByRole('button', {
        name: 'Update Settings',
      });

      fillInput(firstName, fakeSettingsData.firstName);
      fillInput(lastName, fakeSettingsData.lastName);
      fillInput(locale, fakeSettingsData.locale);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockedRequest.isDone()).toBeTruthy();
        expect(
          screen.getByText('Your settings have been updated successfully')
        ).toBeInTheDocument();
      });
    });

    it('renders API errors when changing account settings', async () => {
      const mockedRequest = mockUpdateUserFailure(fakeSettingsData);

      render(<Settings />, {
        state: fakeState,
      });
      const firstName = screen.getByLabelText('First Name');
      const lastName = screen.getByLabelText('Last Name');
      const locale = screen.getByLabelText('Language');
      const submitButton = screen.getByRole('button', {
        name: 'Update Settings',
      });

      fillInput(firstName, fakeSettingsData.firstName);
      fillInput(lastName, fakeSettingsData.lastName);
      fillInput(locale, fakeSettingsData.locale);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockedRequest.isDone()).toBeTruthy();
        expect(screen.getByText('Some scary error')).toBeInTheDocument();
      });
    });

    it('requires the first name when changing account settings', async () => {
      render(<Settings />, {
        state: fakeState,
      });
      const firstName = screen.getByLabelText('First Name');
      const submitButton = screen.getByRole('button', {
        name: 'Update Settings',
      });

      fillInput(firstName, '');

      fireEvent.click(submitButton);

      const firstNameError = await screen.findByText('Required');

      expect(firstNameError).toBeInTheDocument();
    });
  });

  describe('change password', () => {
    it('confirms when the password was changed successfully', async () => {
      const mockedRequest = mockUpdateUserSuccess(
        fakePasswordData.user,
        fakePasswordData.passwordCheck
      );

      render(<Settings />, {
        state: fakeState,
      });

      const currentPasswordInput = screen.getByLabelText('Current Password');
      const newPasswordInput = screen.getByLabelText('New Password');
      const submitButton = screen.getByRole('button', {
        name: 'Update Password',
      });

      fillInput(currentPasswordInput, fakePasswordData.passwordCheck);
      fillInput(newPasswordInput, fakePasswordData.user.password);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockedRequest.isDone()).toBeTruthy();
        expect(
          screen.getByText('Your password has been changed successfully')
        ).toBeInTheDocument();
      });
    });

    it('renders API errors when changing the password', async () => {
      const mockedRequest = mockUpdateUserFailure(
        fakePasswordData.user,
        fakePasswordData.passwordCheck
      );

      render(<Settings />, {
        state: fakeState,
      });

      const currentPasswordInput = screen.getByLabelText('Current Password');
      const newPasswordInput = screen.getByLabelText('New Password');
      const submitButton = screen.getByRole('button', {
        name: 'Update Password',
      });

      fillInput(currentPasswordInput, fakePasswordData.passwordCheck);
      fillInput(newPasswordInput, fakePasswordData.user.password);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockedRequest.isDone()).toBeTruthy();
        expect(screen.getByText('Some scary error')).toBeInTheDocument();
      });
    });

    it('requires the current password when changing the password', async () => {
      render(<Settings />, {
        state: fakeState,
      });

      const currentPasswordInput = screen.getByLabelText('Current Password');
      const newPasswordInput = screen.getByLabelText('New Password');
      const submitButton = screen.getByRole('button', {
        name: 'Update Password',
      });

      fillInput(currentPasswordInput, '');
      fillInput(newPasswordInput, fakePasswordData.user.password);

      fireEvent.click(submitButton);

      const currentPasswordError = await screen.findByText('Required');

      expect(currentPasswordError).toBeInTheDocument();
    });

    it('requires the new password when changing the password', async () => {
      render(<Settings />, {
        state: fakeState,
      });

      const currentPasswordInput = screen.getByLabelText('Current Password');
      const newPasswordInput = screen.getByLabelText('New Password');
      const submitButton = screen.getByRole('button', {
        name: 'Update Password',
      });

      fillInput(currentPasswordInput, fakePasswordData.passwordCheck);
      fillInput(newPasswordInput, '');

      fireEvent.click(submitButton);

      const newPasswordError = await screen.findByText('Required');

      expect(newPasswordError).toBeInTheDocument();
    });

    it('requires the current password to be at least 8 chars', async () => {
      render(<Settings />, {
        state: fakeState,
      });

      const currentPasswordInput = screen.getByLabelText('Current Password');
      const newPasswordInput = screen.getByLabelText('New Password');
      const submitButton = screen.getByRole('button', {
        name: 'Update Password',
      });

      fillInput(currentPasswordInput, fakePasswordData.passwordCheck);
      fillInput(newPasswordInput, 'pass');

      fireEvent.click(submitButton);

      const newPasswordError = await screen.findByText(
        'Password too short, minimum length is 8 characters'
      );

      expect(newPasswordError).toBeInTheDocument();
    });
  });
});
