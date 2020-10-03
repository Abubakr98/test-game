import styled from 'styled-components'

import {
  orange100,
  white100,
  orange80,
  orange120,
  black100,
} from '../../global/styles'

const Main = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`
const Button = styled.button`
  background: ${orange100};
  border-radius: 12px;
  height: 64px;
  width: 296px;
  color: ${white100};
  font-weight: 600;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 100ms ease-in-out;
  @media (max-width: 768px) {
    margin-top: 70px;
  }
  @media (min-width: 1921px) {
    font-size: 1vw;
    width: 15vw;
  }
  &:hover {
    background: ${orange80};
  }
  &:active {
    background: ${orange120};
  }
`
const Title = styled.h1`
  color: ${black100};
  line-height: 116%;
  font-weight: 600;
  max-width: 624px;
  font-size: 56px;
  @media (min-width: 1921px) {
    font-size: 3vw;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 32px;
    text-align: center;
  }
`

export { Main, Button, Title }
