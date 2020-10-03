import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, Dispatch } from '../../../store'
import { IAnswerButtonProps } from './types'
import { Button } from './styles'

const AnswerButton: React.FC<IAnswerButtonProps> = ({
  name,
  text,
  isRight,
}: IAnswerButtonProps) => {
  const gameData = useSelector((rootState: RootState) => rootState.game)
  const disable = useSelector((rootState: RootState) => rootState.disableRound)
  const { disableRound, game, round } = useDispatch<Dispatch>()
  const [answer, setAnswer] = useState('')
  const history = useHistory()

  const hendleAnswer = () => {
    if (!disable) {
      if (gameData.length === 1) {
        localStorage.removeItem('game')
        history.push('/result')
      }
      disableRound.setDisable(true)
      if (isRight) {
        round.setRound(gameData[0])
        localStorage.setItem('round', JSON.stringify(gameData[0]))
        localStorage.setItem('game', JSON.stringify(gameData.slice(1)))
        setAnswer('correct')
        setTimeout(() => {
          setAnswer('')
          disableRound.setDisable(false)
          game.levelPassed()
        }, 1000)
      } else {
        setAnswer('warn')
        setTimeout(() => {
          setAnswer('')
          localStorage.removeItem('game')
          history.push('/result')
        }, 1000)
      }
    }
  }
  return (
    <Button state={answer} onClick={hendleAnswer}>
      <svg
        width='373'
        height='72'
        viewBox='0 0 373 72'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M22.7172 5.28344C24.8781 2.28016 28.3521 0.5 32.052 0.5H340.948C344.648 0.5 348.122 2.28015 350.283 5.28343L372.384 36L350.283 66.7166C348.122 69.7198 344.648 71.5 340.948 71.5H32.052C28.3521 71.5 24.8781 69.7198 22.7172 66.7166L0.615976 36L22.7172 5.28344Z'
          fill='white'
          stroke='#D0D0D8'
        />

        <text dy='10%' x='30px' y='50%'>
          <tspan>{name}</tspan> {text}
        </text>
      </svg>
      <hr className='hr1' />
      <hr className='hr2' />
    </Button>
  )
}

export default AnswerButton
