import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './scenes/Home'
import About from './scenes/About'
import Articles from './scenes/Articles'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/articles" component={Articles} />
    <Route component={NotFound} />
  </Switch>
)

export default App
