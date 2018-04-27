// @flow

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import middleware from './middleware'
import { asyncStoreEnhancer } from 'redux-async-enhancer'
import reducers from './reducers'

// We keep this even in production because it only helps debugging. If anyone wants
// to see my actions and state then who am I to stop them.
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (initialState: Object) => {
	const store = createStore(
		combineReducers(reducers),
		initialState,
		composeEnchancer(
			applyMiddleware(...middleware),
			asyncStoreEnhancer(reducers)
		)
	)

	return store
}
