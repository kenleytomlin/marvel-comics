import styled from 'styled-components'
import {
  rem
} from 'polished'

export const SearchInput = styled.input`
  width: 100%;
  height: ${rem('30px')};
`

export const MarvelLogo = styled.div`
  background: url('assets/images/marvel_logo.png') no-repeat center;
  height: ${rem('125px')};
  background-position: center;
`

export const CharactersOuter = styled.div`
  position: relative;
`

export const CharactersInner = styled.div`
  position: absolute;
  top: ${rem('-30px')};
  left: 0;
  background-color: white;
  max-height: 400px;
  overflow-y: scroll;
  width: calc(100% + 6px);
  z-index: 999;
`
