import React from 'react'
import {
  CharacterContainer,
  CharacterThumbnail,
  CharacterNameContainer
} from './style'

const Character = ({ id, name, thumbnail, onClick }) => {
  return (
    <CharacterContainer onClick={onClick} >
      <div>
        <CharacterThumbnail src={thumbnail} />
      </div>
      <CharacterNameContainer>
        { name }
      </CharacterNameContainer>
    </CharacterContainer>
  )
}

export default Character
