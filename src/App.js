import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store } from './store'
import { history } from './store/navigation'

const App = () => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					<Route exact path="/" component={() => (
						<span>Hello React</span>
					)}/>
				</Switch>
			</ConnectedRouter>
		</Provider>
	)
}

export default App
