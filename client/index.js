import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import reducers from './modules/store'
import App from './App'

const preloadedState = window.INITIAL_STATE
delete window.INITIAL_STATE
const store = createStore(reducers, preloadedState)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('app'))
