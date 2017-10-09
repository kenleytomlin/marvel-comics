import styled from 'styled-components';
import {
  rem,
  padding,
  lighten
} from 'polished'
import {
  MARVEL_RED
} from '../../style/constants/colors'

export const ComicContainer = styled.div`
  position: relative;
  cursor: pointer;
`

export const ComicOverlayContainer = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,transparent 0,rgba(0,0,0,.6) 99%);
  border: ${rem('2px')} solid ${MARVEL_RED};
  color: white;
  transition: opacity .25s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const ComicCoverThumbnail = styled.img`
  width: 100%;
  height: auto;
`

export const ComicOverlayTitle = styled.h3`
  position: absolute;
  bottom: ${rem('35px')};
  color: white;
`

export const ComicOverlayIssueNumber = styled.h4`
  position: absolute;
  bottom: 0;
`

export const VoteContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  ${padding(rem('15px'),rem('15px'),0,0)}
  z-index: 999;
`

export const VoteButton = styled.button.attrs({
  style: ({ isUpvoted }) => ({
    background: isUpvoted ? `url('assets/icons/heart_on.png') no-repeat center` : "url('assets/icons/heart_off.png') no-repeat center" })
})`
  border: none;
  position: relative;
  ${padding(rem('2px'),rem('8px'))}
  height: ${rem('30px')};
  width: ${rem('35px')};
  cursor: pointer;
  opacity: 0.6;
  transition: opacity .25s ease-in-out, background .25s ease-in-out;
  &:hover {
    opacity: 1;
  }
`

const Button = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  background-color: ${MARVEL_RED};
  ${padding(rem('10px'))}
  transition: background-color .25s ease-in-out;
  &:hover {
    background-color: ${lighten(0.2,MARVEL_RED)}
  }
`

export const PreviousButton = styled(Button)`
  float: left;
`

export const NextButton = styled(Button)`
  float: right;
`

