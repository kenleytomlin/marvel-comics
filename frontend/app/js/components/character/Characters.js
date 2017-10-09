import React from 'react'
import Empty from './Empty'
import CharacterContainer from '../../containers/character/CharacterContainer'
import {
  CharactersOuter,
  CharactersInner
} from './style'

const Characters = ({ ids, isFetching }) => {
  if(ids.length > 0 && !isFetching) {
    return(
      <CharactersOuter>
        <CharactersInner>
          {
            ids.map(id => {
              return(<CharacterContainer key={`character-${id}`} id={id} />)
            })
          }
        </CharactersInner>
      </CharactersOuter>
    )
  } else if(isFetching) {
    return(
      null
    )
  } else {
    return null
  }
}

export default Characters

