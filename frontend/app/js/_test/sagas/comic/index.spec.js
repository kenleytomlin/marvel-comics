import axios from 'axios'
import { default as actions } from '../../../actions/comic'
import { request } from '../../../sagas/shared/simpleApiCall'
import { put, call, fork } from 'redux-saga/effects'
import { startUp, downvote, upvote } from '../../../sagas/comic'
import { getRouterQuery } from '../../../selectors/router'
import { getComic } from '../../../selectors/comic'

describe('sagas',() => {
  describe('comic',() => {
    describe('startUp', () => {
      it('yields the correct effects', () => {
        const pathname = '/v1/comics'
        const params = { page: 0 }
        const method = 'get'
        const iterator = startUp({ payload: { method,  pathname, params } })

        expect(iterator.next().value).toEqual([
          fork(request,[actions.comicIndexFetchSuccess,actions.comicIndexFetchFailure],{ payload: { pathname, params, method } }),
          fork(request,[actions.comicVotedFetchSuccess,actions.comicVotedFetchFailure],{ payload: { pathname: '/v1/comics/votes', method: 'get' } })
        ])
      })
    })

    describe('upvote',() => {
      context('when the response is ok', () => {
        it('yields the correct effects', () => {
          const pathname = '/v1/comics/1/upvote'
          const iterator = upvote({ payload: 1 })

          expect(iterator.next().value).toEqual(call(axios.post,pathname))
          expect(iterator.next({ data: { results: [1] }}).value).toEqual(put(actions.comicIndexUpvoteSuccess([1])))
        })
      })

      context('when the response is not ok', () => {
        it('yields the correct effects', () => {
          const pathname = '/v1/comics/1/upvote'
          const iterator = upvote({ payload: 1 })
          const error = new Error('')

          expect(iterator.next().value).toEqual(call(axios.post,pathname))
          expect(iterator.throw(error).value).toEqual(put(actions.comicIndexUpvoteFailure(error)))
        })
      })
    })

    describe('downvote',() => {
      context('when the response is ok', () => {
        it('yields the correct effects', () => {
          const pathname = '/v1/comics/1/downvote'
          const iterator = downvote({ payload: 1 })

          expect(iterator.next().value).toEqual(call(axios.post,pathname))
          expect(iterator.next({ data: { results: [] }}).value).toEqual(put(actions.comicIndexDownvoteSuccess([])))
        })
      })

      context('when the response is not ok', () => {
        it('yields the correct effects', () => {
          const pathname = '/v1/comics/1/downvote'
          const iterator = downvote({ payload: 1 })
          const error = new Error('')

          expect(iterator.next().value).toEqual(call(axios.post,pathname))
          expect(iterator.throw(error).value).toEqual(put(actions.comicIndexDownvoteFailure(error)))
        })
      })
    })
  })
})

