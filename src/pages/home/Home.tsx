import React from 'react'

import { Wrapper, Main, Text, Img } from './styles'
import hand from '../../img/hand.png'
import TextWithButton from '../../components/TextWithButton'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <div className='bg' />
      {/* todo? bg to style compo */}
      <Main>
        <Img>
          <img src={hand} alt='hand' />
        </Img>
        <Text>
          <TextWithButton
            title='Who wants to be a millionaire?'
            btnText='Start'
          />
        </Text>
      </Main>
    </Wrapper>
  )
}

export default Home
