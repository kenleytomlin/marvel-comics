import error from '../../../reducers/shared/error'

describe('reducers',() => {
  describe('shared/error', () => {
    it('throws when the [ERROR_TYPE,SUCCESS_TYPE] array is not passed', () => {
      expect(()=> {
        error()
      }).toThrow('An array of [ERROR_TYPE,SUCCESS_TYPE] must be passed to error reducer')
    })

    it('returns a function', () => {
      expect(error(['ERROR_TYPE','SUCCESS_TYPE'])).toBeA(Function)
    })

    it('handles the initial state', () => {
      const reducer = error(['ERROR_TYPE','SUCCESS_TYPE'])

      expect(reducer(undefined,{ type: 'NOT_A_TYPE' }))
      .toEqual(false)
    })

    it('handles the ERROR_TYPE', () => {
      const reducer = error(['ERROR_TYPE','SUCCESS_TYPE'])

      expect(reducer(false,{ type: 'ERROR_TYPE' } ))
      .toEqual(true)
    })

    it('handles the SUCCESS_TYPE', () => {
      const reducer = error(['ERROR_TYPE','SUCCESS_TYPE'])

      expect(reducer(true,{ type: 'SUCCESS_TYPE' }))
      .toEqual(false)
    })
  })
})
