import styled, { css } from 'styled-components'
import { orderBy } from 'lodash'
import {
  padding,
  rem,
  em
} from 'polished'

//All values are in pixels
export const BASE_THEME = {
  responsive: {
    outerMargin: 30,
    gutter: 15,
    totalCols: 12,
    container: {
      xs: 375,
      sm: 768,
      md: 1024,
      lg: 1440
    },
    breakpoints: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440
    }
  }
}

export const media = Object.keys(BASE_THEME.responsive.breakpoints)
.reduce((memo,label) => {
  const size = BASE_THEME.responsive.breakpoints[label]
  memo[label] = (...args) => css`
    @media screen and (min-width: ${em(`${size}px`)}) {
      ${css(...args)}
    }
  `
  return memo
},{})

export const BREAKPOINTS = ['xs', 'sm', 'md', 'lg']

export const Grid = styled.div`
  margin-right: auto;
  margin-left: auto;

  ${p => p.fluid && css`
    ${padding(
      0,
      rem(`${p.theme.responsive.outerMargin}px`),
      0,
      rem(`${p.theme.responsive.outerMargin}px`)
    )}
  `}

  ${p => !p.fluid && css`
    ${BREAKPOINTS.map(bp => css`
      ${media[bp]`
        width: ${rem(`${p.theme.responsive.container[bp]}px`)};
      `}
    `)}
  `}
`

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  ${p => BREAKPOINTS.reduce((memo,bp) => {
    if(p[bp]) {
      return css`
        ${memo}
        ${media[bp]`
          ${p => {
            switch(true) {
              case p[bp].justifySpaceBetween:
                return `justify-content: space-between;`;
              case p[bp].justifySpaceAround:
                return `justify-content: space-around;`;
              case p[bp].justifyFlexStart:
                  return `justify-content: flex-start;`;
              case p[bp].justifyFlexEnd:
                  return `justify-content: flex-end;`;
              case p[bp].justifyEnd:
                  return `justify-content: flex-end;`;
              case p[bp].justifyStart:
                  return `justify-content: flex-start;`;
              case p[bp].justifyLeft:
                  return `justify-content: left;`;
              case p[bp].justifyRight:
                  return `justify-content: right;`;
              case p[bp].justifyCenter:
                  return `justify-content: center;`;
            }
          }}
          ${p => {
            switch(true) {
              case p[bp].alignBaseline:
                return `align-items: baseline;`;
              case p[bp].alignCenter:
                return `align-items: center;`;
              case p[bp].alignStart:
                return `align-items: start;`;
              case p[bp].alignEnd:
                return `align-items: end;`;
              case p[bp].alignflexStart:
                return `align-items: flex-start;`;
              case p[bp].alignFlexEnd:
                return `align-items: flex-end;`;
              case p[bp].alignLeft:
                return `align-items: left;`;
              case p[bp].alignRight:
                return `align-items: right`;
              }
          }}
        `}`
    } else {
      return memo;
    }
    },'')
  }
`

export const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  ${p => padding(
    0,
    rem(`${p.theme.responsive.gutter}px`),
    0,
    rem(`${p.theme.responsive.gutter}px`)
  )}

  ${p => BREAKPOINTS.map(bp => {
    if(p[bp]) {
      return css`
        ${media[bp]`
          flex-basis: ${100 / p.theme.responsive.totalCols * p[bp]}%;
          max-width: ${100 / p.theme.responsive.totalCols * p[bp]}%;
          display: block;
        `}
      `
    } else if(p[bp] === false) {
      return css`
        display: none;
      `
    }
  })}
`;

