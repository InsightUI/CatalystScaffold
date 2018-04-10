import { createStore, applyMiddleware, compose } from 'redux'
import makeRootReducer, { injectReducer } from './makeReducer'
import middleware from './middleware'

// We keep this even in prodction because it only helps debugging. If anyone wants
// to see my actions and state then who am I to stop them.
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (initialState = {}) => {
	const store = createStore(
		makeRootReducer(),
		initialState,
		composeEnchancer(applyMiddleware(...middleware))
	)

	// Async Reducers are just that. These are meant to be code split points where
	// we will dynamically load new reducers in. Much like not loading admin reducers
	// for normal users and so on.
	store.asyncReducers = {}
	store.injectReducer = (key, reducer) => injectReducer(store, { key, reducer })

	return store
}
