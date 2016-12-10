import { voted } from '../../../reducers/comic'
import * as types from '../../../constants/comic'

describe('reducers',() => {
  describe('comic/voted', () => {
    it('handles the initial state', () => {
      expect(voted(undefined,{ type: 'NOT_A_TYPE' })).toEqual([])
    })

    it('handles COMIC_INDEX_VOTED_SUCCESS', () => {
      expect(voted([],{ type: types.COMIC_VOTED_FETCH_SUCCESS, payload: [1] })).toEqual([1])
    })

    it('handles COMIC_INDEX_UPVOTE_SUCCESS', () => {
      expect(voted([],{ type: types.COMIC_INDEX_UPVOTE_SUCCESS, payload: [1] })).toEqual([1])
    })

    it('handles COMIC_INDEX_DOWNVOTE_SUCCESS', () => {
      expect(voted([1],{ type: types.COMIC_INDEX_DOWNVOTE_SUCCESS, payload: [] })).toEqual([])
    })
  })
})
