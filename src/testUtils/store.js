import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';

export const middleware = [thunk, promise];
export const enhancers = applyMiddleware(...middleware);

export default () => createStore(rootReducer, enhancers);
