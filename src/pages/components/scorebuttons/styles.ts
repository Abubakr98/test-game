/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

import { black40, black100, orange100, black5 } from '../../global/styles'

interface IProps {
  state?: string
}

const Button = styled.button<IProps>`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  svg {
    top: 0;
    left: 0;
    z-index: 1999;
  }
  & > svg > path {
    stroke: ${(p) =>
      !p.state ? `` : p.state === 'checked' ? `${orange100}` : `${black5}`};
  }
  & > svg > text {
    fill: ${(p) =>
      !p.state
        ? `${black100}`
        : p.state === 'checked'
        ? `${orange100}`
        : `${black40}`};
    font: 400 20px 'Inter';
  }
  & > .hr1,
  .hr2 {
    position: absolute;
    width: 100%;
    z-index: 10;
    height: 1px;
    top: 35%;
    background-color: ${(p) =>
      !p.state
        ? `${black40}`
        : p.state === 'checked'
        ? `${orange100}`
        : `${black5}`};
    border: none;
  }
`

export { Button }
