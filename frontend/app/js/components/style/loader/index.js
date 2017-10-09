import styled, { keyframes } from 'styled-components'

const loadEight = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoaderOverlay = styled.div`
  position: fixed;
  width: 100%;
  top: 50%;
`
export const Loader = styled.div`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  transform: translateZ(0);
  animation: ${loadEight} 1.1s infinite linear;
  border-radius: 50%;
  width: 10em;
  height: 10em;
  &:after{
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`
