import mergeObject from '../../../reducers/shared/mergeObject'

describe('reducers', () => {
  describe('shared/mergeObject', () => {
    it('throws when the SUCCESS_TYPE is not passed', () => {
      expect(() => {
        mergeObject(undefined,'comic')
      }).toThrow('A SUCCESS_TYPE and entity must be passed to mergeObject')
    })

    it('throws when the entity is not passed', () => {
      expect(() => {
        mergeObject('SUCCESS_TYPE')
      }).toThrow('A SUCCESS_TYPE and entity must be passed to mergeObject')
    })

    it('returns a function',() => {
      expect(mergeObject('SUCCESS_TYPE','comic')).toBeA(Function)
    })

    it('handles the initial state', () => {
      const reducer = mergeObject('SUCCESS_TYPE','comic')

      expect(reducer(undefined,{ type: 'NOT_A_TYPE' }))
      .toEqual({})
    })

    it('handles the SUCCESS_TYPE', () => {
      const reducer = mergeObject('SUCCESS_TYPE','comic')

      expect(reducer({ 1: {} },{ type: 'SUCCESS_TYPE', payload: { entities: { comic: { 2: {} } } } })).toEqual(
        {
          1: {},
          2: {}
        }
      )
    })
  })
})
