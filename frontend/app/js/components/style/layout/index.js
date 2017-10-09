import styled, { css } from 'styled-components'
import { orderBy } from 'lodash'
import {
  padding,
  rem
} from 'polished'
import {
  BREAKPOINTS,
  media
} from '../responsive'

export const SPACING_THEME = {
  spacing: {
    xs: '5px',
    sm: '10px',
    md: '20px',
    lg: '30px',
    xl: '50px',
    xxl: '70px'
  }
}

const getDefinedBreakpoints = (p) => (orderBy(
    Object.keys(p)
    .filter(k =>  BREAKPOINTS.includes(k)) ,k => (BREAKPOINTS.indexOf(k))
    )
);

export const Container = styled.div`
  ${p => {
    const spacing = p.theme.spacing
    return getDefinedBreakpoints(p).reduce((memo,bp) => {
      if(p[bp] !== false) {
        return css`
          ${memo}
          ${media[bp]`
            ${padding(
              spacing[p[bp].top] || '0px',
              spacing[p[bp].right] || '0px',
              spacing[p[bp].bottom] || '0px',
              spacing[p[bp].left] || '0px'
            )}`
          }`
      } else {
        return css`
          ${memo}
          ${media[bp]`
            ${padding('0px')}
          `}
        `
      }
    },'')}
  }}
`

