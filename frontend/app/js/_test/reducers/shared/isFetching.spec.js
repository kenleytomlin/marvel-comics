import isFetching from '../../../reducers/shared/isFetching'

describe('reducers',() => {
  describe('share/isFetching',() => {
    it('throws when the [FETCH_TYPE,SUCCESS_TYPE,FAILURE_TYPE] is not passed', () => {
      expect(()=> isFetching()).toThrow('An array of [FETCH_TYPE,SUCCESS_TYPE,FAILURE_TYPE] must be passed to isFetching')
    })

    it('returns a function', () => {
      expect(isFetching(['FETCH_TYPE','SUCCESS_TYPE','FAILURE_TYPE'])).toBeA(Function)
    })

    it('handles the initial state', () => {
      const reducer = isFetching(['FETCH_TYPE','SUCCESS_TYPE','FAILURE_TYPE'])

      expect(reducer(undefined,{ type: 'NOT_A_TYPE' })).toEqual(false)
    })

    it('handles the FETCH_TYPE', () => {
      const reducer = isFetching(['FETCH_TYPE','SUCCESS_TYPE','FAILURE_TYPE'])

      expect(reducer(false,{ type: 'FETCH_TYPE' })).toEqual(true)
    })

    it('handles the SUCCESS_TYPE', () => {
      const reducer = isFetching(['FETCH_TYPE','SUCCESS_TYPE','FAILURE_TYPE'])

      expect(reducer(true,{ type: 'SUCCESS_TYPE' })).toEqual(false)
    })

    it('handles the FAILURE_TYPE', () => {
      const reducer = isFetching(['FETCH_TYPE','SUCCESS_TYPE','FAILURE_TYPE'])

      expect(reducer(true,{ type: 'FAILURE_TYPE' })).toEqual(false)
    })
  })
})
