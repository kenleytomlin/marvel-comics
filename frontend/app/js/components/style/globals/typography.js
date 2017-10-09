import { css } from 'styled-components'
import {
  rem
} from 'polished'

export const FALLBACK = '\'HelveticaNeue\', \'Helvetica\', \'Arial\', \'sans-serif\'';

export default css`
  font-family: Marvel, ${FALLBACK};
  font-size: ${rem('16px')};
  line-height: 1.25;
  letter-spacing: ${rem('0.5px')};
  color: black;
  b {
    font-weight: bold;
  }
  button, input, optgroup, select, textarea {
    font-family: Marvel, ${FALLBACK};
  }
  h1 {
    font-family: Marvel, ${FALLBACK};
    font-size: ${rem('44px')};
    font-weight: normal;
    line-height: 1.25;
    letter-spacing: ${rem('0.5px')};
  }
  h2 {
    font-family: Marvel, ${FALLBACK};
    font-size: ${rem('32px')};
    font-weight: normal;
    line-height: 1.25;
    letter-spacing: ${rem('0.5px')};
  }
  h3 {
    font-family: Marvel, ${FALLBACK};
    font-size: ${rem('24px')};
    font-weight: normal;
    line-height: 1.25;
    letter-spacing: ${rem('0.5px')};
  }
  h4 {
    font-family: Marvel, ${FALLBACK};
    font-size: ${rem('20px')};
    font-weight: normal;
    line-height: 1.25;
    letter-spacing: ${rem('0.5px')};
  }
`

