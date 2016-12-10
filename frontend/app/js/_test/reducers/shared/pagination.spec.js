import pagination from '../../../reducers/shared/pagination'
import paginationResponse from '../../fixtures/pagination'

describe('reducers',() => {
  describe('shared', () => {
    it('throws when SUCCESS_TYPE is not passed', () => {
      expect(() => {
        pagination()
      }).toThrow('A SUCCESS_TYPE must be passed to pagination')
    })

    it('returns a function', () => {
      expect(pagination('SUCCESS_TYPE')).toBeA(Function)
    })

    it('handles the initial state', () => {
      const reducer = pagination('SUCCESS_TYPE')

      expect(reducer(undefined,{ type: 'NOT_A_TYPE' })).toEqual({ isLast: true, totalElements: 0, currentPage: 0, totalPages: 0 })
    })

    it('handles the SUCCESS_TYPE', () => {
      const paginationRes = paginationResponse()
      const reducer = pagination('SUCCESS_TYPE')

      expect(reducer({ isLast: true, totalElements: 0, currentPage: 0, totalPages: 0 },{ type: 'SUCCESS_TYPE', payload: { result: { pagination: paginationRes } } })).toEqual(paginationRes)
    })
  })
})
