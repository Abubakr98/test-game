/// <reference types="styled-components/cssprop" />
import { createGlobalStyle } from 'styled-components'

const orange120 = '#E87928'
const orange100 = '#FF8B37'
const orange80 = '#FFAC70'
const orange5 = '#FFF3EB'
const green100 = '#47D867'
const green5 = '#E6FAEA'
const red100 = '#EC6259'
const red5 = '#FDEEED'
const black100 = '#1C1C21'
const black40 = '#D0D0D8'
const black5 = '#F5F5F7'
const white100 = '#FFFFFF'

const GlobalStyle = createGlobalStyle`
  html,
* {
  box-sizing: border-box;
  
}
body {
  padding: 0;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f7;
}
a {
  text-decoration: none;
}
`

// todo https://styled-components.com/docs/api
export {
  orange120,
  orange100,
  orange80,
  orange5,
  green100,
  green5,
  red100,
  red5,
  black100,
  black40,
  white100,
  black5,
  GlobalStyle,
}
