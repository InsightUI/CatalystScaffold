import { store } from '../'

it('Adds a reducer to the store', () => {
	expect(Object.keys(store.getState())).not.toContain('test')
	// Add a test reducer

	store.injectReducer('test', (state = {}) => state)
	expect(Object.keys(store.getState())).toContain('test')
})

it("Shouldn't add an existing reducer", () => {
	store.injectReducer('test2', (state = '', action) => {
		if (action.type === 'test2') {
			return action.text
		}
		return state
	})

	// This second call should not run each reducer is added once.
	store.injectReducer('test2', (state = '', action) => {
		if (action.type === 'test2') {
			return 'THIS SHOULD NOT PASS'
		}
		return state
	})

	store.dispatch({ type: 'test2', text: 'test2' })
	expect(store.getState().test2).toBe('test2')
})
