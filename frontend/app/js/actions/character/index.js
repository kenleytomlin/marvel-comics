import {
  CHARACTER_INDEX_FETCH_REQUEST,
  CHARACTER_INDEX_FETCH_SUCCESS,
  CHARACTER_INDEX_FETCH_FAILURE,
  CHARACTER_SEARCH_UPDATE,
  CHARACTER_SEARCH_CLEAR,
  CHARACTER_SELECT,
  CHARACTER_DESELECT
} from '../../constants/character'
import { createActions } from 'redux-actions'
import { receiveAll } from '../../schemas/character'

const actions = createActions({
  CHARACTER_INDEX_FETCH_REQUEST: (params) => { return { method: 'get', pathname: '/v1/characters', params } },
  CHARACTER_INDEX_FETCH_SUCCESS: (response) => { return receiveAll(response) }
},
CHARACTER_INDEX_FETCH_FAILURE,
CHARACTER_SEARCH_UPDATE,
CHARACTER_SELECT,
CHARACTER_DESELECT,
CHARACTER_SEARCH_CLEAR
)

export default actions
