import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import fontCss from './fonts'
import typographyCss from './typography'

injectGlobal`
  ${normalize()}
  ${fontCss}
  body {
    button:focus, input:focus {
      outline: none;
    }
    ${typographyCss}
    background-color: black;
  }
`

