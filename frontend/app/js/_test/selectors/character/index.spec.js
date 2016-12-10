import {
  getCharacterIds,
  getCharacterIsFetching,
  getCharacterById,
  getCharacterThumbnail,
  getCharacterSearch,
  getCharacterPagination,
  getSelectedCharacter
} from '../../../selectors/character'
import characterResponse from '../../fixtures/character'
import paginationResponse from '../../fixtures/pagination'

const setup = () => {
  const character = characterResponse()
  const pagination = paginationResponse()
  const state = {
    characters: {
      ids: [1,2],
      selected: 1,
      isFetching: false,
      search: 'wolv',
      characters: {
        1: character
      },
      pagination
    }
  }

  return {
    state,
    character,
    pagination
  }
}

describe('selectors', () => {
  describe('getCharacterIds',() => {
    it('returns the ids', () => {
      const { state } = setup()

      expect(getCharacterIds(state)).toEqual([1,2])
    })
  })

  describe('getCharacterIsFetching', () => {
    it('returns isFetching', () => {
      const { state } = setup()

      expect(getCharacterIsFetching(state)).toEqual(false)
    })
  })

  describe('getCharacterById', () => {
    it('returns the character', () => {
      const { state, character } = setup()

      expect(getCharacterById(state,1)).toEqual(character)
    })
  })

  describe('getCharacterThumbnail', () => {
    it('returns the fill path to the thumbnail', () => {
      const { state, character } = setup()

      expect(getCharacterThumbnail(state,1)).toEqual(`${character.thumbnail.path}.${character.thumbnail.extension}`)
    })
  })

  describe('getCharacterSearch', () => {
    it('returns the character search value', () => {
      const { state } = setup()

      expect(getCharacterSearch(state)).toEqual({ nameStartsWith: 'wolv' })
    })
  })

  describe('getCharacterPagination', () => {
    it('returns the character pagination object', () => {
      const { state, pagination } = setup()

      expect(getCharacterPagination(state)).toEqual(pagination)
    })
  })


  describe('getSelectedCharacter', () => {
    it('returns the character id array as a comma seperated string', () => {
      const { state } = setup()

      expect(getSelectedCharacter(state)).toEqual(1)
    })
  })
})

