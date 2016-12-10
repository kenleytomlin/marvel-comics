import mergeObject from '../shared/mergeObject'
import isFetching from '../shared/isFetching'
import error from '../shared/error'
import pagination from '../shared/pagination'
import fieldUpdate from '../shared/fieldUpdate'
import { combineReducers } from 'redux'
import * as types from '../../constants/character'
import { concat, without } from 'lodash'

export const ids = (state = [],action) => {
  switch(action.type) {
    case types.CHARACTER_INDEX_FETCH_SUCCESS:
      return action.payload.result.results
    case types.CHARACTER_SEARCH_CLEAR:
      return []
    default:
      return state
  }
}

export const selected = (state = [], action) => {
  switch(action.type) {
    case types.CHARACTER_SELECT:
      return action.payload
    case types.CHARACTER_DESELECT:
      return null
    default:
      return state
  }
}

export default combineReducers({
  ids: ids,
  selected,
  characters: mergeObject(types.CHARACTER_INDEX_FETCH_SUCCESS,'character'),
  isFetching: isFetching([types.CHARACTER_INDEX_FETCH_REQUEST,types.CHARACTER_INDEX_FETCH_SUCCESS,types.CHARACTER_INDEX_FETCH_FAILURE]),
  error: error([types.CHARACTER_INDEX_FETCH_FAILURE,types.CHARACTER_INDEX_FETCH_SUCCESS]),
  pagination: pagination(types.CHARACTER_INDEX_FETCH_SUCCESS),
  search: fieldUpdate(types.CHARACTER_SEARCH_UPDATE)
})

