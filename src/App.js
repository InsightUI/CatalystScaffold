import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { history } from './store/navigation'
import { store } from './store'

const App = () => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					<Route exact path="/" component={() => <h1>Hello World</h1>} />
				</Switch>
			</ConnectedRouter>
		</Provider>
	)
}

export default App
