import {
  getComicIds,
  getComicIsFetching,
  getComicById,
  getComicIsUpvoted,
  getComicThumbnail,
  getComicVoted,
  getComicPagination
} from '../../../selectors/comic'
import comicResponse from '../../fixtures/comic'
import paginationResponse from '../../fixtures/pagination'

const setup = () => {
  const comicOne = comicResponse(1)
  const comicTwo = comicResponse(2)
  const pagination = paginationResponse()
  const state = {
    comics: {
      ids: [1,2,3,4,5],
      isFetching: false,
      voted: [1],
      pagination,
      comics: {
        1: comicOne,
        2: comicTwo
      }
    }
  }

  return {
    state,
    pagination,
    comicOne,
    comicTwo
  }
}

describe('selectors',() => {
  describe('getComicIds', () => {
    it('returns the ids', () => {
      const { state } = setup()

      expect(getComicIds(state)).toEqual([[1,2,3,4],[5]])
    })
  })

  describe('getComicIsFetching', () => {
    it('returns isFetching', () => {
      const { state } = setup()

      expect(getComicIsFetching(state)).toEqual(false)
    })
  })

  describe('getComicById', () => {
    it('returns the comic', () => {
      const { state, comicOne } = setup()

      expect(getComicById(state,1)).toEqual(comicOne)
    })
  })

  describe('getComicVotedIds', () => {
    it('returns the upvoted comic ids', () => {
      const { state } = setup()

      expect(getComicVoted(state)).toEqual([1])
    })
  })

  describe('getComicIsUpvoted', () => {
    context('when the comic has been upvoted', () => {
      it('returns true', () => {
        const { state } = setup()

        expect(getComicIsUpvoted(state,1)).toEqual(true)
      })
    })

    context('when the comic has not been upvoted', () => {
      it('returns false', () => {
        const { state } = setup()

        expect(getComicIsUpvoted(state,2)).toEqual(false)
      })
    })
  })

  describe('getComicThumbnail', () => {
    it('returns the full path to the thumbnail', () => {
      const { state, comicOne } = setup()

      expect(getComicThumbnail(state,1)).toEqual(`${comicOne.thumbnail.path}.${comicOne.thumbnail.extension}`)
    })
  })

  describe('getComicPagination', () => {
    it('returns the comic pagination object', () => {
      const { state, pagination } = setup()

      expect(getComicPagination(state)).toEqual(pagination)
    })
  })
})
