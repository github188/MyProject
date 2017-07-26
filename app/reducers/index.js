'use strict'

import {combineReducers} from 'redux';
import user from './user';
import nav from './nav'
import location from './location'

const rootReducer = combineReducers({
  user,
  nav,
  location,
});

export default rootReducer;