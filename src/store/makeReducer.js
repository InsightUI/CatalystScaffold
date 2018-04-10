import { combineReducers } from 'redux'
import reducers from './reducers/'

export const makeRootReducer = asyncReducers => {
	return combineReducers({
		...reducers,
		...asyncReducers
	})
}

// This is how we inject a async reducer into the redux store.
export const injectReducer = (store, { key, reducer }) => {
	if (!store.asyncReducers[key]) {
		store.asyncReducers[key] = reducer
		store.replaceReducer(makeRootReducer(store.asyncReducers))
	}
}

export default makeRootReducer
