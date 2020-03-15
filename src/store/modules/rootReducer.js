import { combineReducers } from 'redux';

import auth from './auth/reducer';
import characters from './characters/reducer';

export default combineReducers({ auth, characters });
