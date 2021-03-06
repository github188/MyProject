'use strict';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

//日志中间件
const logger = store => next => action => {
	if(typeof action === 'function') console.log('dispatching a function',action);
	else console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

//生成store 绑定中间件
export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger,thunk)
  );

  return store;
}