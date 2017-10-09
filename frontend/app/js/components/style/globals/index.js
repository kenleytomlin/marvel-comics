import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import fontCss from './fonts'
import typographyCss from './typography'
import keyframes from './keyframes'

injectGlobal`
  ${normalize()}
  ${fontCss}
  ${keyframes}
  body {
    button:focus, input:focus {
      outline: none;
    }
    ${typographyCss}
    background-color: black;
  }
`

