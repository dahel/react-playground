import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import rootSaga from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
	let store = createStore(
		reducer,
		initialState,
		composeEnhancers(
			applyMiddleware(sagaMiddleware)
		)
	);

	sagaMiddleware.run(rootSaga);

	return store;
}