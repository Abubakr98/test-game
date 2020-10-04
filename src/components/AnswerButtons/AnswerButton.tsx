import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Dispatch } from '../../store'
import { IAnswerButtonProps } from './types'
import ButtonContainer from './styles'
import selectState from './selectors'
import Button from './components/Button'

const AnswerButton: React.FC<IAnswerButtonProps> = ({
  name,
  text,
  isRight,
}: IAnswerButtonProps) => {
  const { gameData, disable } = useSelector(selectState)
  const { disableRound, game, round } = useDispatch<Dispatch>()
  const [answer, setAnswer] = useState('')
  const history = useHistory()
  const finishGame = useCallback(() => {
    localStorage.removeItem('game')
    history.push(`${process.env.PUBLIC_URL}/result`)
  }, [history])
  const hendleAnswer = () => {
    if (disable) return

    disableRound.setDisable(true)
    let updateFn
    if (isRight) {
      round.setRound(gameData[0])
      setAnswer('correct')
      updateFn = () => {
        setAnswer('')
        disableRound.setDisable(false)
        game.levelPassed()
      }
    } else {
      setAnswer('warn')
      updateFn = () => {
        setAnswer('')
        finishGame()
      }
    }
    setTimeout(updateFn, 700)
  }
  return (
    <ButtonContainer state={answer} onClick={hendleAnswer}>
      <Button text={text} name={name} />
      <hr className='hr1' />
      <hr className='hr2' />
    </ButtonContainer>
  )
}

export default AnswerButton
