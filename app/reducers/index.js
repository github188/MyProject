'use strict'

import {combineReducers} from 'redux';
import user from './user';
import nav from './nav';
import location from './location';
import payment from './payment';

const rootReducer = combineReducers({
  user,
  nav,
  location,
  payment
});

export default rootReducer;