import simpleApiCall, { request } from '../shared/simpleApiCall'
import axios from 'axios'
import { call, fork, put } from 'redux-saga/effects'
import { COMIC_INDEX_FETCH_REQUEST, COMIC_VOTED_FETCH_REQUEST, COMIC_INDEX_UPVOTE_REQUEST, COMIC_INDEX_DOWNVOTE_REQUEST } from '../../constants/comic'
import { takeEvery } from 'redux-saga'
import { default as actions } from '../../actions/comic'

export const startUp = function* ({ payload }) {
  yield [
    fork(request,[actions.comicIndexFetchSuccess,actions.comicIndexFetchFailure],{ payload }),
    fork(request,[actions.comicVotedFetchSuccess,actions.comicVotedFetchFailure],{ payload: { pathname: '/v1/comics/votes', method: 'get' } })
  ]
}

export const comicRootSaga = function* () {
  yield [
    fork(simpleApiCall(COMIC_INDEX_FETCH_REQUEST,[actions.comicIndexFetchSuccess,actions.comicIndexFetchFailure])),
    takeEvery(COMIC_INDEX_UPVOTE_REQUEST,upvote),
    takeEvery(COMIC_INDEX_DOWNVOTE_REQUEST,downvote)
  ]
}

export const downvote = function* ({ payload }) {
  try {
    const { data: { results } } = yield call(axios.delete,`/v1/comics/${payload}/downvote`)
    yield put(actions.comicIndexDownvoteSuccess(results))
  } catch(error) {
    yield put(actions.comicIndexDownvoteFailure(error))
  }
}

export const upvote = function* ({ payload }) {
  try {
    const { data: { results } } = yield call(axios.post,`/v1/comics/${payload}/upvote`)
    yield put(actions.comicIndexUpvoteSuccess(results))
  } catch(error) {
    yield put(actions.comicIndexUpvoteFailure(error))
  }
}

