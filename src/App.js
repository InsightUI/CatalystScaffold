import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import { store } from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <span>Hello world</span>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
