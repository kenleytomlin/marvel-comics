import { default as actions } from '../../../actions/character'
import * as types from '../../../constants/character'
import { receiveAll } from '../../../schemas/character'
import characterResponse from '../../fixtures/character'

describe('actions', () => {
  describe('character', () => {
    describe('characterIndexFetchRequest', () => {
      it('returns the expected action', () => {
        const expectedAction = { type: types.CHARACTER_INDEX_FETCH_REQUEST, payload: { method: 'get', pathname: '/v1/characters', params: { page: 0 } } }

        expect(actions.characterIndexFetchRequest({ page: 0 })).toEqual(expectedAction)
      })
    })

    describe('characterIndexFetchSuccess', () => {
      it('returns the expected action', () => {
        const response = { results: [characterResponse()], pagination: {} }
        const expectedAction = { type: types.CHARACTER_INDEX_FETCH_SUCCESS, payload: receiveAll(response) }

        expect(actions.characterIndexFetchSuccess(response)).toEqual(expectedAction)
      })
    })

    describe('characterIndexFetchFailure', () => {
      it('returns the expected action', () => {
        const error = new Error('')
        const expectedAction = { type: types.CHARACTER_INDEX_FETCH_FAILURE, payload: error, error: true }

        expect(actions.characterIndexFetchFailure(error)).toEqual(expectedAction)
      })
    })

    describe('characterSelect', () => {
      it('returns the expected action', () => {
        const expectedAction = { type: types.CHARACTER_SELECT, payload: 1 }

        expect(actions.characterSelect(1)).toEqual(expectedAction)
      })
    })

    describe('characterDeselect', () => {
      it('returns the expected action', () => {
        const expectedAction = { type: types.CHARACTER_DESELECT, payload: 1 }

        expect(actions.characterDeselect(1)).toEqual(expectedAction)
      })
    })

    describe('characterSearchUpdate', () => {
      it('returns the expected action', () => {
        const expectedAction = { type: types.CHARACTER_SEARCH_UPDATE, payload: 'Wolv' }

        expect(actions.characterSearchUpdate('Wolv')).toEqual(expectedAction)
      })
    })

    describe('characterSearchClear', () => {
      it('returns the expected action', () => {
        const expectedAction = { type: types.CHARACTER_SEARCH_CLEAR }

        expect(actions.characterSearchClear()).toEqual(expectedAction)
      })
    })
  })
})
