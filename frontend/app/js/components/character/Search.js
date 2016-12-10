import React from 'react'
import CharactersContainer from '../../containers/character/CharactersContainer'

const Search = ({ params, onChange }) => {
  return(<div className='search-input-container'>
    <div className='marvel-logo' />
    <div className='search-results-container'>
      <input className='search-input' type='text' onChange={ (e) => onChange(e.target.value)  } />
      <CharactersContainer />
    </div>
  </div>)
}

export default Search
