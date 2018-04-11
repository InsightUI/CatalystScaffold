// @flow

import { injectReducer } from './makeReducer'

export function asyncStoreEnhancer() {
	let asyncReducers = {}

	return (createStore: Function) => (...args: any) => {
		const store = createStore(...args)

		function inject(key: string, reducer: Function) {
			injectReducer({ key, reducer })
		}

		return {
			...store,
			injectReducer: inject,
			asyncReducers
		}
	}
}
