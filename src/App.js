import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <h1>Hello world</h1>
      </PersistGate>
    </Provider>
  );
};

export default App;
