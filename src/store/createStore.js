import { createStore, applyMiddleware, compose } from 'redux'
import makeRootReducer, { injectReducer } from './reducers'
import middleware from './middleware'

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (initialState = {}) => {
	const store = createStore(
		makeRootReducer(),
		initialState,
		composeEnchancer(applyMiddleware(...middleware))
	)

	store.asyncRducers = {}
	store.injectReducer = (key, reducer) => injectReducer(store, { key, reducer })

	return store
}
