import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { RootState } from '../../store'
import { Wrapper, Main, Answers, Question, Scoreboard, Menu } from './styles'
import AnswerButton from '../components/answerButtons'
import ScoreButton from '../components/scorebuttons'
import Humberger from '../components/humburgerButton'
import data from '../../game.json'
import { IGame } from '../../models/game'

const Game: React.FC = () => {
  const isShow = useSelector((state: RootState) => state.menu)
  const gameData = useSelector((state: RootState) => state.game)

  if (gameData === null) {
    return <Redirect to='/' />
  }
  return (
    <Wrapper>
      <Main>
        <Menu>
          <Humberger />
        </Menu>
        <Question>
          <h1>{gameData[0] && gameData[0].question}</h1>
        </Question>
        <Answers>
          {gameData[0] &&
            gameData[0].answers.map(
              (el: { text: string; isRight: boolean }, i: number) => {
                return (
                  <AnswerButton
                    key={i.toString()}
                    isRight={el.isRight}
                    name='A'
                    text={el.text}
                  />
                )
              }
            )}
        </Answers>
      </Main>
      <Scoreboard isShow={isShow}>
        {data.map((el) => {
          return (
            <ScoreButton
              state={
                el.id === gameData[0].id
                  ? 'checked'
                  : gameData.findIndex((x: IGame) => x.id === el.id) === -1
                  ? 'passed'
                  : ''
              }
              key={el.id}
              text={el.cost}
            />
          )
        })}
      </Scoreboard>
    </Wrapper>
  )
}

export default Game
