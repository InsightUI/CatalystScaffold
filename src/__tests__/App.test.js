import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../store/navigation'
import { store } from '../store'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</Provider>,
		div
	)
})
