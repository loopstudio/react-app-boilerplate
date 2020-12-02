import { combineReducers } from 'redux';

import { reducer as auth } from 'features/auth';

export default combineReducers({ auth });
