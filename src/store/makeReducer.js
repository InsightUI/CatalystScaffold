import { combineReducers } from 'redux'
import reducers from './reducers/'

export const makeRootReducer = asyncRducers => {
	return combineReducers({
		...reducers,
		...asyncRducers
	})
}

// This is how we inject a async reducer into the redux store.
export const injectReducer = (store, { key, reducer }) => {
	if (!store.asyncRducers[key]) {
		store.asyncRducers[key] = reducer
		store.replaceReducer(makeRootReducer(store.asyncRducers))
	}
}

export default makeRootReducer
