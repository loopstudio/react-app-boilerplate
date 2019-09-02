import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middleware = [thunk, promise];

const enhancers = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancers);

export const persistor = persistStore(store);
