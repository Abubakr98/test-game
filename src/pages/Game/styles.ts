import styled from 'styled-components'

import { black100 } from '../../styles'

interface IProps {
  isShow: boolean
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding-bottom: 100px;
  position: relative;
  height: 100vh;
  @media (max-width: 768px) {
    padding: 0;
  }
`
const Menu = styled.div`
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
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 130px;
  @media (max-width: 1170px) {
    padding-top: 0;
  }
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
  min-width: 300px;
  @media (max-width: 768px) {
    padding: 0 16px;
    text-align: center;
    & h1 {
      font-size: 18px;
    }
  }
`
const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  min-width: 300px;
  overflow: hidden;
  & > button {
    margin: 0 16px 32px 16px;
  }
  @media (max-width: 1170px) {
    justify-content: center;
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
  width: 376px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column-reverse;
  top: 0;
  right: 0;
  padding-top: 150px;
  height: 100vh;
  background-color: #ffffff;
  @media (max-width: 768px) {
    display: ${(p) => (p.isShow ? 'flex' : 'none')};
    justify-content: center;
    position: absolute;
    padding-top: 0;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 500;
    height: 100%;

    & button,
    svg {
      height: 30px;
    }
  }
  @media (max-height: 768px) {
    padding-top: 30px;
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
