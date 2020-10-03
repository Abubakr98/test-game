import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Dispatch } from '../../../store'
import { ITextWithButtonProps } from './types'
import { Main, Button, Title } from './styles'
import data from '../../../game.json'

const TextWithButton: React.FC<ITextWithButtonProps> = ({
  title,
  btnText,
}: ITextWithButtonProps) => {
  const { game, disableRound } = useDispatch<Dispatch>()
  const handleClick = () => {
    localStorage.removeItem('round')
    game.setGameData(data)
    disableRound.setDisable(false)
  }
  return (
    <Main>
      <Title>{title}</Title>
      <Link to='/game'>
        <Button onClick={handleClick}>{btnText}</Button>
      </Link>
    </Main>
  )
}

export default TextWithButton
