import fieldUpdate from '../../../reducers/shared/fieldUpdate'

describe('reducers', () => {
  describe('shared/fieldUpdate', () => {
    it('throws when the type is not passed', () => {
      expect(() => {
        fieldUpdate()
      }).toThrow('A type must be passed to fieldUpdate')
    })
  })

  it('returns a function', () => {
    expect(fieldUpdate('UPDATE_TYPE')).toBeA(Function)
  })

  it('handles the initial state', () => {
    const reducer = fieldUpdate('UPDATE_TYPE')

    expect(reducer(undefined,{ type: 'NOT_A_TYPE' })).toEqual('')
  })

  it('handles the UPDATE_TYPE', () => {
    const reducer = fieldUpdate('UPDATE_TYPE')

    expect(reducer('fiel',{ type: 'UPDATE_TYPE', payload: 'field' })).toEqual('field')
  })
})
