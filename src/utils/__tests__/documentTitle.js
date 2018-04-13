import {
	CHANGE_TITLE,
	getTitle,
	titleReducer,
	updateTitleAction
} from '../documentTitle'

it('Title reducer', () => {
	expect(getTitle()).toBe('')
	const newTitle = titleReducer(undefined, {
		type: CHANGE_TITLE,
		title: 'Hello World'
	})
	expect(newTitle).toBe('Hello World')
	expect(getTitle()).toBe('Hello World')
})

it('Update Title Action should return an action object', () => {
	const titleAction = updateTitleAction('Foo')
	expect(titleAction).toEqual({
		type: CHANGE_TITLE,
		title: 'Foo'
	})
})
