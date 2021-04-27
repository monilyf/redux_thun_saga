import React, { Component } from 'react'
import Router from './router'
import { Provider } from "react-redux";
import configureStore from './app/redux/store';
const store = configureStore();

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
