import { receiveAll } from '../../../schemas/comic'
import comicResponse from '../../fixtures/comic'
import paginationResponse from '../../fixtures/pagination'

describe('schemas',() => {
  describe('comic',() => {
    describe('receiveAll',() => {
      it('returns the normalized result', () => {
        const comic = comicResponse()
        const pagination = paginationResponse()
        const response = {
          pagination,
          results: [comic]
        }
        const expected = {
          result: { results: [1], pagination },
          entities: {
            comic: {
              1: comic
            }
          }
        }

        expect(receiveAll(response)).toEqual(expected)
      })
    })
  })
})
