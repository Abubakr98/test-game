import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Home from './pages/Home'
import Game from './pages/Game'
import Result from './pages/Result'
import { Dispatch } from './store'
import { GlobalStyle } from './styles'

const App: React.FC = () => {
  const { round, game } = useDispatch<Dispatch>()
  useEffect(() => {
    game.fetchGameData()
    round.fetchRoundData()
  }, [game, round])
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact>
            <Home />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/game`}>
            <Game />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/result`}>
            <Result />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
