// @flow

import { createStore, applyMiddleware, compose } from 'redux'
import makeRootReducer from './makeReducer'
import middleware from './middleware'
import { asyncStoreEnhancer } from './asyncStoreEnhancer'

// We keep this even in production because it only helps debugging. If anyone wants
// to see my actions and state then who am I to stop them.
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (initialState: Object) => {
	const store = createStore(
		makeRootReducer(),
		initialState,
		composeEnchancer(applyMiddleware(...middleware), asyncStoreEnhancer())
	)

	return store
}
