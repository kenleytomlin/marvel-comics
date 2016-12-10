import ids from '../../../reducers/shared/ids'

describe('reducers',() => {
  describe('shared/ids', () => {
    it('throws when SUCCESS_TYPE is not passed', () => {
      expect(() => ids()).toThrow('A SUCCESS_TYPE must be passed to ids')
    })

    it('returns a function', () => {
      expect(ids('SUCCESS_TYPE')).toBeA(Function)
    })

    it('handles the initial state', () => {
      const reducer = ids('SUCCESS_TYPE')

      expect(reducer(undefined,{ type: 'NOT_A_TYPE' })).toEqual([])
    })

    it('handles the SUCCESS_TYPE', () => {
      const reducer = ids('SUCCESS_TYPE')

      expect(reducer([1],{ type: 'SUCCESS_TYPE', payload: { result: { results: [1,2] } } })).toEqual([1,2])
    })

  })
})
