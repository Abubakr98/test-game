/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

import {
  orange100,
  black40,
  black100,
  orange5,
  green100,
  green5,
  red5,
  red100,
} from '../../styles'

interface IProps {
  state?: string
}

const Button = styled.button<IProps>`
  height: 72px;
  width: 373px;
  min-width: 300px;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  &:hover > svg > path {
    stroke: ${(p) =>
      !p.state
        ? `${orange100}`
        : p.state === 'correct'
        ? `${green100}`
        : `${red100}`};
  }
  & > svg > path {
    stroke: ${(p) =>
      !p.state ? `` : p.state === 'correct' ? `${green100}` : `${red100}`};
  }
  & > svg > text > tspan {
    fill: ${orange100};
    font: 600 20px 'Inter';
  }
  & > svg > text {
    fill: ${black100};
    font: 400 20px 'Inter';
  }
  &:active > svg > path {
    stroke: ${(p) =>
      !p.state
        ? `${orange100}`
        : p.state === 'correct'
        ? `${green100}`
        : `${red100}`};
    fill: ${(p) =>
      !p.state
        ? `${orange5}`
        : p.state === 'correct'
        ? `${green5}`
        : `${red5}`};
  }
  & > svg > path {
    fill: ${(p) =>
      !p.state ? `` : p.state === 'correct' ? `${green5}` : `${red5}`};
  }
  & > .hr1,
  .hr2 {
    position: absolute;
    width: 17px;
    height: 1px;
    top: 40%;
    background-color: ${(p) =>
      !p.state
        ? `${black40}`
        : p.state === 'correct'
        ? `${green100}`
        : `${red100}`};
    border: none;
  }
  & > .hr1 {
    left: -16px;
  }
  & > .hr2 {
    right: -16px;
  }
  &:hover .hr1,
  &:hover .hr2,
  &:active .hr1,
  &:active .hr2 {
    background-color: ${(p) =>
      !p.state
        ? `${orange100}`
        : p.state === 'correct'
        ? `${green100}`
        : `${red100}`};
  }

  @media (max-width: 768px) {
    width: 100%;
    svg {
      width: 100%;
      z-index: 5;
    }
    & > .hr1,
    .hr2 {
      width: 100%;
      z-index: 2;
      top: 40%;
    }
  }
`

export default Button
