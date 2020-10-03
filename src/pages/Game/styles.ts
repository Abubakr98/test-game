import styled from 'styled-components'

import { black100 } from '../global/styles'

interface IProps {
  isShow: boolean
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  padding-top: 130px;
  display: flex;
  margin: 0 auto;
  /* background-color: aquamarine; */
  justify-content: space-between;
  max-height: 900px;
  @media (max-width: 768px) {
    padding-top: 0;
  }
`
const Menu = styled.div`
  background-color: red;
  width: 100%;
  padding: 10px;
  display: none;
  z-index: 9999;
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`
const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 845px;
  min-width: 300px;
  background-color: antiquewhite;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-height: 768px) {
    justify-content: space-between;
  }
`

const Question = styled.div`
  & h1 {
    font-weight: 600;
    font-size: 32px;
    color: ${black100};
  }
  background-color: yellowgreen;
  min-width: 300px;
  @media (max-width: 768px) {
    text-align: center;
    & h1 {
      font-size: 22px;
    }
  }
`
const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: green;
  width: 100%;
  min-width: 300px;
  & > button {
    margin: 0 16px 32px 16px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    & > button {
      margin: 0 8px 15px 8px;
    }
  }
  @media (max-height: 768px) {
    margin-top: 100px;
  }
  @media (max-width: 320px) {
    margin-top: 50px;
  }
`
const Scoreboard = styled.div<IProps>`
  background-color: violet;
  width: 376px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column-reverse;
  @media (max-width: 768px) {
    display: ${(p) => (p.isShow ? 'flex' : 'none')};
    justify-content: center;
    position: absolute;
    width: 100%;
    z-index: 500;
    height: 100%;

    & button,
    svg {
      height: 30px;
    }
  }
`
const Img = styled.div`
  max-width: 624px;
  max-height: 367px;
  & img {
    width: 100%;
  }
  @media (max-width: 768px) {
    margin-bottom: -150px;
  }
`
export { Wrapper, Main, Answers, Question, Img, Scoreboard, Menu }
