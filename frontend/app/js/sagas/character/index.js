import simpleApiCall, { request } from '../shared/simpleApiCall'
import { call, fork, put } from 'redux-saga/effects'
import { CHARACTER_INDEX_FETCH_REQUEST } from '../../constants/character'
import actions from '../../actions/character'

export const characterRootSaga = function* () {
  yield fork(simpleApiCall(CHARACTER_INDEX_FETCH_REQUEST,[actions.characterIndexFetchSuccess,actions.characterIndexFetchFailure]))
}
