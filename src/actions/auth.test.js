import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import Types from 'actions/types';
import * as actions from 'actions/auth';

const middlewares = [thunk, promise];
const mockStore = configureStore(middlewares);

const fakeToken = '123456';
const fakeCredentials = {
  email: 'user@example.com',
  password: 'password',
};

describe('Auth action creators', () => {
  it('should creates an action to clear session', () => {
    const expectedAction = {
      type: Types.CLEAR_SESSION,
      payload: null,
    };

    expect(actions.clearSession()).toEqual(expectedAction);
  });

  it('should create and action to reset password', async () => {
    const store = mockStore({});

    const expectedAction = {
      type: Types.RESET_PASSWORD,
    };

    await store.dispatch(
      actions.resetPassword(fakeCredentials.password, fakeToken)
    );

    expect(store.getActions()[0]).toMatchObject(expectedAction);
  });

  it('should create an action to set guest local', () => {
    const language = 'es';
    const expectedAction = {
      type: Types.SET_GUEST_LOCALE,
      payload: { locale: language },
    };

    expect(actions.setGuestLocale(language)).toEqual(expectedAction);
  });

  it('should create an action to sign in', async () => {
    const store = mockStore({});

    const expectedAction = {
      type: Types.SIGN_IN,
    };

    await store.dispatch(actions.signIn(fakeCredentials));

    expect(store.getActions()[0]).toMatchObject(expectedAction);
  });

  it('should create an action to sign out', async () => {
    const store = mockStore({});

    const expectedAction = {
      type: Types.SIGN_OUT,
    };

    await store.dispatch(actions.signOut());

    expect(store.getActions()[0]).toMatchObject(expectedAction);
  });

  it('should create an action to sign up', async () => {
    const store = mockStore({});

    const expectedAction = {
      type: Types.SIGN_UP,
    };

    await store.dispatch(actions.signUp(fakeCredentials));

    expect(store.getActions()[0]).toMatchObject(expectedAction);
  });

  it('should create an action to update user', async () => {
    const store = mockStore({});

    const expectedAction = {
      type: Types.UPDATE_USER,
    };

    await store.dispatch(actions.updateUser(fakeCredentials));

    expect(store.getActions()[0]).toMatchObject(expectedAction);
  });
});
