import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Game from './pages/Game'
import Result from './pages/result'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/game'>
          <Game />
        </Route>
        <Route path='/result'>
          <Result />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
