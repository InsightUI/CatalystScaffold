import React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={() => <h1>Hello World</h1>} />
		</Switch>
	)
}

export default App
