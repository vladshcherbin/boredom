import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import * as graphql from 'graphql'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createStore } from 'redux'
import { ApolloClient, ApolloProvider, getDataFromTree } from 'react-apollo'
import { createLocalInterface } from 'apollo-local-query'
import { StaticRouter } from 'react-router-dom'
import schema from './graphQL'
import combineReducersWithApollo from '../client/modules/store'
import App from '../client/App'

const app = express()

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)
app.use(express.static(`${__dirname}/public`))

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.get('*', (req, res) => {
  const context = {}
  const apolloClient = new ApolloClient({
    ssrMode: true,
    networkInterface: createLocalInterface(graphql, schema)
  })
  const store = createStore(combineReducersWithApollo(apolloClient))
  const clientApp = (
    <ApolloProvider store={store} client={apolloClient}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  )
  getDataFromTree(clientApp).then(() => {
    const html = ReactDOMServer.renderToString(clientApp)
    const preloadedState = {
      ...store.getState(),
      apollo: {
        data: apolloClient.getInitialState().data
      }
    }

    if (context.status === 404) {
      res.status(404).render('index', { html, state: preloadedState })
    } else {
      res.render('index', { html, state: preloadedState })
    }
  })
})

app.listen(3000)
