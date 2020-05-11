import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { fillInput, fireEvent, render, waitFor } from 'testUtils';
import {
  mockUpdateUserSuccess,
  mockUpdateUserFailure,
  mockUpdatePasswordSuccess,
  mockUpdatePasswordFailure,
} from 'testUtils/mocks/auth';
import Settings from '.';

const fakeSettingsData = {
  firstName: 'John',
  lastName: 'Smith',
  locale: 'es',
};

const fakePassword = 'password';
const fakeInvalidPassword = 'password';

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
  it('should submit account settings correctly', async () => {
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

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(
        queryByText('Your settings have been updated successfully')
      ).toBeInTheDocument();
    });
  });

  it('should show error on account settings response failure', async () => {
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

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(queryByText('Some scary error')).toBeInTheDocument();
    });
  });

  it('should show errors for invalid account settings values', async () => {
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

  it('should submit new password correctly', async () => {
    const mockedRequest = mockUpdatePasswordSuccess(fakePassword);

    const { getByTestId, queryByText } = render(<Settings />, {
      state: fakeState,
    });

    const password = getByTestId('password-input-settings');
    const submitButton = getByTestId('submit-password-button');

    fillInput(password, fakePassword);

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(
        queryByText('Your password has been changed successfully')
      ).toBeInTheDocument();
    });
  });

  it('should show error on update password response failure', async () => {
    const mockedRequest = mockUpdatePasswordFailure(fakeInvalidPassword);

    const { getByTestId, queryByText } = render(<Settings />, {
      state: fakeState,
    });
    const password = getByTestId('password-input-settings');
    const submitButton = getByTestId('submit-password-button');

    fillInput(password, fakeInvalidPassword);

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(
        queryByText('is too short (minimum is 6 characters)')
      ).toBeInTheDocument();
    });
  });

  it('should show error for empty new password values', async () => {
    const { getByTestId, queryByText } = render(<Settings />, {
      state: fakeState,
    });
    const password = getByTestId('password-input-settings');
    const submitButton = getByTestId('submit-password-button');

    fillInput(password, '');

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(queryByText('Required')).toBeInTheDocument();
    });
  });
});
