import '@testing-library/jest-dom/extend-expect';

import { fillInput, fireEvent, render, waitFor } from 'testUtils';
import {
  mockUpdateUserSuccess,
  mockUpdateUserFailure,
} from 'testUtils/mocks/auth';
import Settings from 'features/app/components/Settings/index';

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

      const { getByLabelText, getByRole, getByText } = render(<Settings />, {
        state: fakeState,
      });

      const firstName = getByLabelText('First Name');
      const lastName = getByLabelText('Last Name');
      const locale = getByLabelText('Language');
      const submitButton = getByRole('button', { name: 'Update Settings' });

      fillInput(firstName, fakeSettingsData.firstName);
      fillInput(lastName, fakeSettingsData.lastName);
      fillInput(locale, fakeSettingsData.locale);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockedRequest.isDone()).toBeTruthy();
        expect(
          getByText('Your settings have been updated successfully')
        ).toBeInTheDocument();
      });
    });

    it('renders API errors when changing account settings', async () => {
      const mockedRequest = mockUpdateUserFailure(fakeSettingsData);

      const { getByLabelText, getByRole, getByText } = render(<Settings />, {
        state: fakeState,
      });
      const firstName = getByLabelText('First Name');
      const lastName = getByLabelText('Last Name');
      const locale = getByLabelText('Language');
      const submitButton = getByRole('button', { name: 'Update Settings' });

      fillInput(firstName, fakeSettingsData.firstName);
      fillInput(lastName, fakeSettingsData.lastName);
      fillInput(locale, fakeSettingsData.locale);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockedRequest.isDone()).toBeTruthy();
        expect(getByText('Some scary error')).toBeInTheDocument();
      });
    });

    it('requires the first name when changing account settings', async () => {
      const { getByLabelText, getByRole, findByText } = render(<Settings />, {
        state: fakeState,
      });
      const firstName = getByLabelText('First Name');
      const submitButton = getByRole('button', { name: 'Update Settings' });

      fillInput(firstName, '');

      fireEvent.click(submitButton);

      const firstNameError = await findByText('Required');

      expect(firstNameError).toBeInTheDocument();
    });
  });

  describe('change password', () => {
    it('confirms when the password was changed successfully', async () => {
      const mockedRequest = mockUpdateUserSuccess(
        fakePasswordData.user,
        fakePasswordData.passwordCheck
      );

      const { getByLabelText, getByRole, getByText } = render(<Settings />, {
        state: fakeState,
      });

      const currentPasswordInput = getByLabelText('Current Password');
      const newPasswordInput = getByLabelText('New Password');
      const submitButton = getByRole('button', { name: 'Update Password' });

      fillInput(currentPasswordInput, fakePasswordData.passwordCheck);
      fillInput(newPasswordInput, fakePasswordData.user.password);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockedRequest.isDone()).toBeTruthy();
        expect(
          getByText('Your password has been changed successfully')
        ).toBeInTheDocument();
      });
    });

    it('renders API errors when changing the password', async () => {
      const mockedRequest = mockUpdateUserFailure(
        fakePasswordData.user,
        fakePasswordData.passwordCheck
      );

      const { getByLabelText, getByRole, getByText } = render(<Settings />, {
        state: fakeState,
      });

      const currentPasswordInput = getByLabelText('Current Password');
      const newPasswordInput = getByLabelText('New Password');
      const submitButton = getByRole('button', { name: 'Update Password' });

      fillInput(currentPasswordInput, fakePasswordData.passwordCheck);
      fillInput(newPasswordInput, fakePasswordData.user.password);

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockedRequest.isDone()).toBeTruthy();
        expect(getByText('Some scary error')).toBeInTheDocument();
      });
    });

    it('requires the current password when changing the password', async () => {
      const { getByLabelText, getByRole, findByText } = render(<Settings />, {
        state: fakeState,
      });

      const currentPasswordInput = getByLabelText('Current Password');
      const newPasswordInput = getByLabelText('New Password');
      const submitButton = getByRole('button', { name: 'Update Password' });

      fillInput(currentPasswordInput, '');
      fillInput(newPasswordInput, fakePasswordData.user.password);

      fireEvent.click(submitButton);

      const currentPasswordError = await findByText('Required');

      expect(currentPasswordError).toBeInTheDocument();
    });

    it('requires the new password when changing the password', async () => {
      const { getByLabelText, getByRole, findByText } = render(<Settings />, {
        state: fakeState,
      });

      const currentPasswordInput = getByLabelText('Current Password');
      const newPasswordInput = getByLabelText('New Password');
      const submitButton = getByRole('button', { name: 'Update Password' });

      fillInput(currentPasswordInput, fakePasswordData.passwordCheck);
      fillInput(newPasswordInput, '');

      fireEvent.click(submitButton);

      const newPasswordError = await findByText('Required');

      expect(newPasswordError).toBeInTheDocument();
    });

    it('requires the current password to be at least 8 chars', async () => {
      const { getByLabelText, getByRole, findByText } = render(<Settings />, {
        state: fakeState,
      });

      const currentPasswordInput = getByLabelText('Current Password');
      const newPasswordInput = getByLabelText('New Password');
      const submitButton = getByRole('button', { name: 'Update Password' });

      fillInput(currentPasswordInput, fakePasswordData.passwordCheck);
      fillInput(newPasswordInput, 'pass');

      fireEvent.click(submitButton);

      const newPasswordError = await findByText(
        'Password too short, minimum length is 8 characters'
      );

      expect(newPasswordError).toBeInTheDocument();
    });
  });
});
