import { receiveAll } from '../../../schemas/character'
import characterResponse from '../../fixtures/character'
import paginationResponse from '../../fixtures/pagination'

describe('schemas', () => {
  describe('character', () => {
    describe('receiveAll', () => {
      it('returns the normalized result', () => {
        const character = characterResponse()
        const pagination = paginationResponse()
        const response = {
          pagination,
          results: [character]
        }
        const expected = {
          result: { results: [1], pagination },
          entities: {
            character: {
              1: character
            }
          }
        }
      })
    })
  })
})
