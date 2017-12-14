import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import { store } from './store'

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<span>Hello world</span>
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}

export default App
