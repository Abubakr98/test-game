import React from 'react'
import { useDispatch } from 'react-redux'

import { Dispatch } from '../../store'
import { Сontainer } from './style'

const HumburgerButton: React.FC = () => {
  const { changeVisibility } = useDispatch<Dispatch>().menu

  return (
    <Сontainer>
      <input
        type='checkbox'
        id='checkbox1'
        className='checkbox1 visuallyHidden'
        onClick={() => changeVisibility()}
      />
      <label htmlFor='checkbox1'>
        <div className='hamburger hamburger1'>
          <span className='bar bar1' />
          <span className='bar bar2' />
          <span className='bar bar3' />
          <span className='bar bar4' />
        </div>
      </label>
    </Сontainer>
  )
}

export default HumburgerButton
