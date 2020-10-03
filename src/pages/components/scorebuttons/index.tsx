import React from 'react'

import { IAnswerButtonProps } from './types'
import { Button } from './styles'

const ScoreButton: React.FC<IAnswerButtonProps> = ({
  text,
  state,
}: IAnswerButtonProps) => {
  return (
    <Button state={state}>
      <svg
        width='240'
        height='40'
        viewBox='0 0 240 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M22.2872 0.5H217.713C221.126 0.5 224.362 2.01596 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6375 37.984 13.4526 35.3621L0.650854 20L13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5Z'
          fill='white'
          stroke='#D0D0D8'
        />
        <text x='50%' y='55%' dominantBaseline='middle' textAnchor='middle'>
          ${text}
        </text>
      </svg>

      <hr className='hr1' />
      <hr className='hr2' />
    </Button>
  )
}

export default ScoreButton
