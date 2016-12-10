import { createSelector } from 'reselect'

export const getCharacterIds = state => state.characters.ids

export const getCharacterIsFetching = state => state.characters.isFetching

export const getCharacterById = (state,id) => state.characters.characters && state.characters.characters[id] ? state.characters.characters[id] : undefined


export const getCharacterThumbnail = createSelector(
  getCharacterById,
  (character) => {
    if(character)
      return `${character.thumbnail.path}.${character.thumbnail.extension}`
    else
      return ''
  }
)

export const getCharacterPagination = state => state.characters.pagination

export const getCharacterSearch = state => { return { nameStartsWith: state.characters.search } }

export const getSelectedCharacter = state => state.characters.selected

