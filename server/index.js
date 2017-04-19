import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import schema from './graphQL'
import reducers from '../client/modules/store'
import App from '../client/App'

const app = express()

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)
app.use(express.static(`${__dirname}/public`))

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.get('*', (req, res) => {
  const context = {}
  const store = createStore(reducers, { user: 'James' })
  const clientApp = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )
  const html = ReactDOMServer.renderToString(clientApp)
  const preloadedState = store.getState()

  if (context.status === 404) {
    res.status(404).render('index', { html, state: preloadedState })
  } else {
    res.render('index', { html, state: preloadedState })
  }
})

app.listen(3000)
