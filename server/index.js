import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../client/App'

const app = express()

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)
app.use(express.static(`${__dirname}/public`))

app.get('*', (req, res) => {
  const clientApp = (
    <App />
  )
  const html = ReactDOMServer.renderToString(clientApp)

  res.render('index', { html })
})

app.listen(3000)
