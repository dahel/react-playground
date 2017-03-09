import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import reducer from '../reducers'

export default function configureStore(initialState) {
	return createStore(
		reducer,
		initialState,
		compose(
			applyMiddleware(thunkMiddleware, createLogger()),
			// todo add support
			// window.devToolsExtension && window.devToolsExtension()
		)
	);
}