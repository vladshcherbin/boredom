import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './scenes/Layout'
import Home from './scenes/Home'
import About from './scenes/About'
import Articles from './scenes/Articles'
import Article from './scenes/Article'
import NotFound from './components/NotFound'

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/articles/:slug" component={Article} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
)

export default App
