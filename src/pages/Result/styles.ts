import styled from 'styled-components'

import { black100 } from '../../styles'

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
  height: 258px;
  min-width: 300px;
  & h3 {
    margin: 0;
    font-weight: 600;
    font-size: 32px;
    opacity: 0.5;
    color: ${black100};
  }
  & h1 {
    margin: 10px 0 50px 0;
  }
  @media (min-width: 1921px) {
    width: 40%;
    align-items: center;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`
export default Text
