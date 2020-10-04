import React from 'react'

const Button: React.FC<{ name: string; text: string }> = ({
  name,
  text,
}: {
  name: string
  text: string
}) => (
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
)
export default Button
