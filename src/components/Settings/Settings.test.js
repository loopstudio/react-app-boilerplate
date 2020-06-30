import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { fillInput, fireEvent, render, waitFor } from 'testUtils';
import {
  mockUpdateUserSuccess,
  mockUpdateUserFailure,
} from 'testUtils/mocks/auth';
import Settings from '.';

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
    userSession: {
      uid: 'jane.doe@example.com',
      client: 'client',
      accessToken: 'token',
    },
    guestLocale: 'en',
  },
};

describe('Settings', () => {
  it('confirms when account settings were changed successfully', async () => {
    const mockedRequest = mockUpdateUserSuccess(fakeSettingsData);

    const { getByTestId, queryByText } = render(<Settings />, {
      state: fakeState,
    });

    const firstName = getByTestId('firstName-input');
    const lastName = getByTestId('lastName-input');
    const locale = getByTestId('locale-input');
    const submitButton = getByTestId('submit-settings-button');

    fillInput(firstName, fakeSettingsData.firstName);
    fillInput(lastName, fakeSettingsData.lastName);
    fillInput(locale, fakeSettingsData.locale);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(
        queryByText('Your settings have been updated successfully')
      ).toBeInTheDocument();
    });
  });

  it('renders API errors when changing account settings', async () => {
    const mockedRequest = mockUpdateUserFailure(fakeSettingsData);

    const { getByTestId, queryByText } = render(<Settings />, {
      state: fakeState,
    });
    const firstName = getByTestId('firstName-input');
    const lastName = getByTestId('lastName-input');
    const locale = getByTestId('locale-input');
    const submitButton = getByTestId('submit-settings-button');

    fillInput(firstName, fakeSettingsData.firstName);
    fillInput(lastName, fakeSettingsData.lastName);
    fillInput(locale, fakeSettingsData.locale);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(queryByText('Some scary error')).toBeInTheDocument();
    });
  });

  it('requires the first name when changing account settings', async () => {
    const { getByTestId, queryByText } = render(<Settings />, {
      state: fakeState,
    });
    const firstName = getByTestId('firstName-input');
    const submitButton = getByTestId('submit-settings-button');

    fillInput(firstName, '');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(queryByText('Required')).toBeInTheDocument();
    });
  });

  it('confirms when the password was changed successfully', async () => {
    const mockedRequest = mockUpdateUserSuccess(
      fakePasswordData.user,
      fakePasswordData.passwordCheck
    );

    const { getByTestId, queryByText } = render(<Settings />, {
      state: fakeState,
    });

    const currentPasswordInput = getByTestId('current-password-input-settings');
    const newPasswordInput = getByTestId('password-input-settings');
    const submitButton = getByTestId('submit-password-button');

    fillInput(currentPasswordInput, fakePasswordData.passwordCheck);
    fillInput(newPasswordInput, fakePasswordData.user.password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(
        queryByText('Your password has been changed successfully')
      ).toBeInTheDocument();
    });
  });

  it('renders API errors when changing the password', async () => {
    const mockedRequest = mockUpdateUserFailure(
      fakePasswordData.user,
      fakePasswordData.passwordCheck
    );

    const { getByTestId, queryByText } = render(<Settings />, {
      state: fakeState,
    });

    const currentPasswordInput = getByTestId('current-password-input-settings');
    const newPasswordInput = getByTestId('password-input-settings');
    const submitButton = getByTestId('submit-password-button');

    fillInput(currentPasswordInput, fakePasswordData.passwordCheck);
    fillInput(newPasswordInput, fakePasswordData.user.password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(queryByText('Some scary error')).toBeInTheDocument();
    });
  });

  it('requires a new password when changing the password', async () => {
    const { getByTestId, queryByText } = render(<Settings />, {
      state: fakeState,
    });

    const currentPasswordInput = getByTestId('current-password-input-settings');
    const newPasswordInput = getByTestId('password-input-settings');
    const submitButton = getByTestId('submit-password-button');

    fillInput(currentPasswordInput, '');
    fillInput(newPasswordInput, fakePasswordData.user.password);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(queryByText('Required')).toBeInTheDocument();
    });
  });

  it('requires the new password when changing the password', async () => {
    const { getByTestId, queryByText } = render(<Settings />, {
      state: fakeState,
    });

    const currentPasswordInput = getByTestId('current-password-input-settings');
    const newPasswordInput = getByTestId('password-input-settings');
    const submitButton = getByTestId('submit-password-button');

    fillInput(currentPasswordInput, fakePasswordData.passwordCheck);
    fillInput(newPasswordInput, '');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(queryByText('Required')).toBeInTheDocument();
    });
  });

  it('requires the current password to be at least 8 chars', async () => {
    const { getByTestId, queryByText } = render(<Settings />, {
      state: fakeState,
    });

    const currentPasswordInput = getByTestId('current-password-input-settings');
    const newPasswordInput = getByTestId('password-input-settings');
    const submitButton = getByTestId('submit-password-button');

    fillInput(currentPasswordInput, fakePasswordData.passwordCheck);
    fillInput(newPasswordInput, 'pass');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        queryByText('Password too short, minimum length is 8 characters')
      ).toBeInTheDocument();
    });
  });
});
