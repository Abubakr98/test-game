import React from 'react'
import { useSelector } from 'react-redux'

import { Text } from './styles'
import hand from '../../img/hand.png'
import TextWithButton from '../../components/TextWithButton'
import { Wrapper, Main, Img } from '../Home/styles'

import { RootState } from '../../store'

const Result: React.FC = () => {
  const round = useSelector((rootState: RootState) => rootState.round) // todo, move to selectors
  return (
    <Wrapper>
      <div className='bg' />
      <Main>
        <Img>
          <img src={hand} alt='hand' />
        </Img>
        <Text>
          <h3>Total score:</h3>
          <TextWithButton
            title={`$${round ? round.cost : 0} earned`}
            btnText='Play again'
          />
        </Text>
      </Main>
    </Wrapper>
  )
}

export default Result