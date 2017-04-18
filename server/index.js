import express from 'express'

const app = express()

app.set('view engine', 'ejs')
app.set('views', `${__dirname}/views`)
app.use(express.static(`${__dirname}/public`))

app.get('*', function (req, res) {
  const html = 'Hello, React'

  res.render('index', { html })
})

app.listen(3000)
