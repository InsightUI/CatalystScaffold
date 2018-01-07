import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { history } from './store/navigation'
import { store } from './store'

import Title from './Title'

const App = () => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					<Route exact path="/" component={Title} />
				</Switch>
			</ConnectedRouter>
		</Provider>
	)
}

export default App
