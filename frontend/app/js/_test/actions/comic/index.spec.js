import { default as actions } from '../../../actions/comic'
import * as types from '../../../constants/comic'
import { receiveAll } from '../../../schemas/comic'
import comicResponse from '../../fixtures/comic'

describe('actions',() => {
  describe('comic', () => {
    describe('comicVotedFetchRequest', () => {
      it('returns the expected action', () => {
        const expectedAction = { type: types.COMIC_VOTED_FETCH_REQUEST, payload: { pathname: '/v1/comics/votes' } }

        expect(actions.comicVotedFetchRequest()).toEqual(expectedAction)
      })
    })
    describe('comicVotedFetchSuccess', () => {
      it('returns the expected action', () => {
        const expectedAction = { type: types.COMIC_VOTED_FETCH_SUCCESS, payload: [1] }

        expect(actions.comicVotedFetchSuccess({ results: [1] })).toEqual(expectedAction)
      })
    })
    describe('comicVotedFetchFailure', () => {
      it('returns the expected action', () => {
        const error = new Error('')
        const expectedAction = { type: types.COMIC_VOTED_FETCH_FAILURE, payload: error, error: true }

        expect(actions.comicVotedFetchFailure(error)).toEqual(expectedAction)
      })
    })
    describe('comicIndexFetchRequest',() => {
      it('returns the expected action', () => {
        const expectedAction = { type: types.COMIC_INDEX_FETCH_REQUEST, payload: { method: 'get', pathname: '/v1/comics', params: { page: 0 } } }

        expect(actions.comicIndexFetchRequest({ page: 0 })).toEqual(expectedAction)
      })
    })

    describe('comicIndexFetchSuccess',() => {
      it('returns the expected action', () => {
        const response = { results: [comicResponse()], pagination: {} }
        const expectedAction = { type: types.COMIC_INDEX_FETCH_SUCCESS, payload: receiveAll(response) }

        expect(actions.comicIndexFetchSuccess(response)).toEqual(expectedAction)
      })
    })

    describe('comicIndexFetchFailure',() => {
      it('returns the expected action', () => {
        const error = new Error('')
        const expectedAction = { type: types.COMIC_INDEX_FETCH_FAILURE, payload: error, error: true }

        expect(actions.comicIndexFetchFailure(error)).toEqual(expectedAction)
      })
    })

    describe('comicIndexUpvoteRequest', () => {
      it('returns the expected action', () => {
        const expectedAction = { type: types.COMIC_INDEX_UPVOTE_REQUEST, payload: 1 }

        expect(actions.comicIndexUpvoteRequest(1)).toEqual(expectedAction)
      })
    })

    describe('comicIndexUpvoteSuccess', () => {
      it('returns the expected action', () => {
        const expectedAction = { type: types.COMIC_INDEX_UPVOTE_SUCCESS, payload: [1] }

        expect(actions.comicIndexUpvoteSuccess([1])).toEqual(expectedAction)
      })
    })

    describe('comicIndexUpvoteFailure', () => {
      it('returns the expected action', () => {
        const error = new Error('')
        const expectedAction = { type: types.COMIC_INDEX_UPVOTE_FAILURE, error: true, payload: error }

        expect(actions.comicIndexUpvoteFailure(error)).toEqual(expectedAction)
      })
    })

    describe('comicIndexDownvoteRequest', () => {
      it('returns the expected action', () => {
        const expectedAction = { type: types.COMIC_INDEX_DOWNVOTE_REQUEST, payload: 1 }

        expect(actions.comicIndexDownvoteRequest(1)).toEqual(expectedAction)
      })
    })

    describe('comicIndexDownvoteSuccess', () => {
      it('returns the expected action', () => {
        const expectedAction = { type: types.COMIC_INDEX_DOWNVOTE_SUCCESS, payload: [1] }

        expect(actions.comicIndexDownvoteSuccess([1])).toEqual(expectedAction)
      })
    })

    describe('comicIndexDownvoteFailure', () => {
      it('returns the expected action', () => {
        const error = new Error('')
        const expectedAction = { type: types.COMIC_INDEX_DOWNVOTE_FAILURE, error: true, payload: error }

        expect(actions.comicIndexDownvoteFailure(error)).toEqual(expectedAction)
      })
    })
  })
})
