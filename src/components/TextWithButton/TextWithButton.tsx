import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Dispatch } from '../../store'
import { ITextWithButtonProps } from './types'
import { Main, Button, Title } from './styles'
import data from '../../game.json'
import { Game } from '../../models/game'

const TextWithButton: React.FC<ITextWithButtonProps> = ({
  title,
  btnText,
}: ITextWithButtonProps) => {
  const { game, disableRound, round } = useDispatch<Dispatch>()
  const handleClick = () => {
    localStorage.removeItem('game')
    localStorage.removeItem('round')
    round.fetchRoundData()
    game.setGameData((data as unknown) as Game)
    disableRound.setDisable(false)
  }
  return (
    <Main>
      <Title>{title}</Title>
      <Link to={`${process.env.PUBLIC_URL}/game`}>
        <Button onClick={handleClick}>{btnText}</Button>
      </Link>
    </Main>
  )
}

export default TextWithButton
