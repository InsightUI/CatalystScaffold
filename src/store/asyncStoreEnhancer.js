// @flow

import { injectReducer } from './makeReducer'

export function asyncStoreEnhancer() {
	const asyncReducers = {}

	return createStore => (...args) => {
		const store = createStore(...args)

		function inject(key: string, reducer: Function) {
			injectReducer(store, { key, reducer })
		}

		return {
			...store,
			injectReducer: inject,
			asyncReducers
		}
	}
}
