import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from '../client/App'

const app = express()

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)
app.use(express.static(`${__dirname}/public`))

app.get('*', (req, res) => {
  const context = {}
  const clientApp = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )
  const html = ReactDOMServer.renderToString(clientApp)

  if (context.status === 404) {
    res.status(404).render('index', { html })
  } else {
    res.render('index', { html })
  }
})

app.listen(3000)
