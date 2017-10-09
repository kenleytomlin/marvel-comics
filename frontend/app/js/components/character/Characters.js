import React from 'react'
import Empty from './Empty'
import CharacterContainer from '../../containers/character/CharacterContainer'

const Characters = ({ ids, isFetching }) => {
  if(ids.length > 0 && !isFetching) {
    return(
      <div className='characters-container'>
        {
          ids.map(id => {
            return(<CharacterContainer key={`character-${id}`} id={id} />)
          })
        }
      </div>
    )
  } else if(isFetching) {
    return(
      <div className='loading-overlay' />
    )
  } else {
    return null;
  }
}

export default Characters

