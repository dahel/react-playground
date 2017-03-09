import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'

import reducer from '../reducers'

export default function configureStore(initialState) {
	return createStore(
		reducer,
		initialState,
		compose(
			applyMiddleware(thunkMiddleware)
		)
	);
}