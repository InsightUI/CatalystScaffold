import { combineReducers } from 'redux'
import reducers from './reducers/'

export const makeRootReducer = asyncRducers => {
	return combineReducers({
		...reducers,
		...asyncRducers
	})
}

export const injectReducer = (store, { key, reducer }) => {
	if (!store.asyncRducers[key]) {
		store.asyncRducers[key] = reducer
		store.replaceReducer(makeRootReducer(store.asyncRducers))
	}
}

export default makeRootReducer
