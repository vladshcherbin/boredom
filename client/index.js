import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { ApolloClient, ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import combineReducersWithApollo from './modules/store'
import App from './App'

const preloadedState = window.INITIAL_STATE
delete window.INITIAL_STATE

const apolloClient = new ApolloClient({ initialState: { apollo: preloadedState.apollo } })
const store = createStore(combineReducersWithApollo(apolloClient), preloadedState)

ReactDOM.render((
  <ApolloProvider store={store} client={apolloClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
), document.getElementById('app'))
