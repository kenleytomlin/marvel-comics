import { ids, selected } from '../../../reducers/character'
import * as types from '../../../constants/character'

describe('reducers',() => {
  describe('character/ids', () => {
    it('handles the initial state', () => {
      expect(ids(undefined,{ type: 'NOT_A_TYPE' })).toEqual([])
    })

    it('handles CHARACTER_INDEX_FETCH_SUCCESS',() => {
      expect(ids([1],{ type: types.CHARACTER_INDEX_FETCH_SUCCESS, payload: { result: { results: [1,2] } } })).toEqual([1,2])
    })

    it('handles CHARACTER_SEARCH_CLEAR', () => {
      expect(ids([1,2],{ type: types.CHARACTER_SEARCH_CLEAR })).toEqual([])
    })
  })

  describe('selected', () => {
    it('handles the initial state', () => {
      expect(selected(undefined,{ type: 'NOT_A_TYPE' })).toEqual([])
    })

    it('handles CHARACTER_SELECT', () => {
      expect(selected(null,{ type: types.CHARACTER_SELECT, payload: 1 })).toEqual([1])
    })

    it('handles CHARACTER_DESELECT', () => {
      expect(selected(1,{ type: types.CHARACTER_DESELECT, payload: 1 })).toEqual(null)
    })
  })
})
