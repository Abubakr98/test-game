import styled from 'styled-components'

import { white100, orange5 } from '../global/styles'

const Wrapper = styled.div`
  background-color: ${white100};
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 0;
  & .bg {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 100vh 100vw;
    border-color: transparent transparent ${orange5} transparent;
    position: absolute;
    z-index: 1;
  }
`

const Main = styled.div`
  position: relative;
  z-index: 999;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
  height: 258px;
  min-width: 300px;
  @media (min-width: 1921px) {
    width: 40%;
  }
`
const Img = styled.div`
  width: 35%;
  max-height: 367px;
  & img {
    width: 100%;
  }
  @media (min-width: 1921px) {
    width: 30%;
  }
  @media (max-width: 768px) {
    margin-bottom: -150px;
    width: 90%;
  }
`
export { Wrapper, Main, Text, Img }
