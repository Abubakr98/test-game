import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Wrapper, Main, Answers, Question, Scoreboard, Menu } from './styles'
import AnswerButton from '../../components/AnswerButtons'
import ScoreButton from '../../components/ScoreButtons'
import Humberger from '../../components/HumburgerButton'
import data from '../../game.json'
import { IGame } from '../../models/game'
import { selectState } from './selectors'

const Game: React.FC = () => {
  const { gameData, isShow } = useSelector(selectState)

  const checkPassed = (answer: { id: number }) => {
    // todo, replace to if with early returns
    return answer.id === gameData[0].id
      ? 'checked'
      : gameData.findIndex((x: IGame) => x.id === answer.id) === -1
      ? 'passed'
      : ''
  }

  if (!gameData) {
    return <Redirect to='/' />
  }
  return (
    <Wrapper>
      <Main>
        <Menu>
          <Humberger />
        </Menu>
        <Question>
          <h1>{gameData[0]?.question}</h1>
        </Question>
        <Answers>
          {gameData[0]?.answers.map((answer) => (
            <AnswerButton
              key={answer.id}
              isRight={answer.isRight}
              name='A'
              text={answer.text}
            />
          ))}
        </Answers>
      </Main>
      <Scoreboard isShow={isShow}>
        {data.map((answer) => (
          <ScoreButton
            state={checkPassed(answer)}
            key={answer.id}
            text={answer.cost}
          />
        ))}
      </Scoreboard>
    </Wrapper>
  )
}

export default Game
