import { mapStateToProps, mergeProps } from '../../../containers/character/SearchContainer'

const setup = (search = 'wolv') => {
  const state = {
    characters: {
      search,
      ids: [1,2]
    }
  }

  return state
}

describe('containers', () => {
  describe('mapStateToProps', () => {
    it('returns the correct props', () => {
      const state = setup()

      expect(mapStateToProps(state)).toEqual({
        characterParams: { nameStartsWith: 'wolv' },
      })
    })
  })

  describe('mergeProps', () => {
    context('when the length of nameStartsWith is < 3', () => {
      it('returns the mergedProps', () => {
        const state = setup('wol')
        const mappedProps = mapStateToProps(state)
        const fakeDispatchProps = {
          characterSearchUpdate: expect.createSpy(),
          characterIndexFetchRequest: expect.createSpy(),
          characterSearchClear: expect.createSpy()
        }

        const mergedProps = mergeProps(mappedProps,fakeDispatchProps)
        mergedProps.onChange('wo')

        expect(fakeDispatchProps.characterSearchUpdate).toHaveBeenCalledWith('wo')
        expect(fakeDispatchProps.characterSearchClear).toHaveBeenCalled()
      })
    })
    context('when the length of nameStartsWith is > 3', () => {
      it('returns the mergedProps', () => {
        const state = setup('wolve')
        const mappedProps = mapStateToProps(state)
        const fakeDispatchProps = {
          characterSearchUpdate: expect.createSpy(),
          characterIndexFetchRequest: expect.createSpy(),
          characterSearchClear: expect.createSpy()
        }

        const mergedProps = mergeProps(mappedProps,fakeDispatchProps)
        mergedProps.onChange('wolve')

        expect(fakeDispatchProps.characterSearchUpdate).toHaveBeenCalledWith('wolve')
        expect(fakeDispatchProps.characterIndexFetchRequest).toHaveBeenCalledWith({ nameStartsWith: 'wolve' })
      })
    })
  })
})
