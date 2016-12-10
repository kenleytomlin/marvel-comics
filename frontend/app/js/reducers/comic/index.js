import ids from '../shared/ids'
import mergeObject from '../shared/mergeObject'
import isFetching from '../shared/isFetching'
import error from '../shared/error'
import pagination from '../shared/pagination'
import { combineReducers } from 'redux'
import * as types from '../../constants/comic'

export const voted = (state = [],action) => {
  switch(action.type) {
    case types.COMIC_VOTED_FETCH_SUCCESS:
    case types.COMIC_INDEX_UPVOTE_SUCCESS:
    case types.COMIC_INDEX_DOWNVOTE_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  ids: ids(types.COMIC_INDEX_FETCH_SUCCESS),
  voted,
  comics: mergeObject(types.COMIC_INDEX_FETCH_SUCCESS,'comic'),
  isFetching: isFetching([types.COMIC_INDEX_FETCH_REQUEST,types.COMIC_INDEX_FETCH_SUCCESS,types.COMIC_INDEX_FETCH_FAILURE]),
  error: error([types.COMIC_INDEX_FETCH_FAILURE,types.COMIC_INDEX_FETCH_SUCCESS]),
  pagination: pagination(types.COMIC_INDEX_FETCH_SUCCESS)
})

