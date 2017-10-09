import styled from 'styled-components'
import {
  rem,
  padding
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

export const CharacterContainer = styled.div`
  height: ${rem('50px')};
  cursor: pointer;
  text-align: left;
`

export const CharacterThumbnail = styled.img`
  width: auto;
  height: ${rem('50px')};
  display: inline-block;
  float: left;
  ${padding(0,rem('5px'),0,rem('5px'))}
`

export const CharacterNameContainer = styled.div`
  padding-top: ${rem('15px')};
`

