import React from 'react'

const Character = ({ id, name, thumbnail, onClick }) => {
  return (
    <div onClick={onClick} className='character-container'>
      <div className='character-thumbnail-container'>
        <img className='character-thumbnail' src={thumbnail} />
      </div>
      <div className='character-name-container'>
        { name }
      </div>
    </div>
  )
}

export default Character
