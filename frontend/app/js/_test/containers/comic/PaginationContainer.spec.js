import { mapStateToProps, mergeProps } from '../../../containers/comic/PaginationContainer'
import paginationResponse from '../../fixtures/pagination'

const setup = (currentPage,isLast) => {
  const pagination = paginationResponse(currentPage,isLast)
  const state = {
    characters: {
      selected: 1,
    },
    comics: {
      pagination
    }
  }

  return {
    state,
    pagination
  }
}

describe('containers',() => {
  describe('mapStateToProps', () => {
    it('returns the correct props', () => {
      const { state, pagination } = setup()

      expect(mapStateToProps(state)).toEqual({ ...pagination, selected: 1 })
    })
  })

  describe('mergeProps', () => {
    const mergePropsSetup = (currentPage,isLast) => {
      const { state, pagination } = setup(currentPage,isLast)
      const fakeDispatchProps = {
        comicIndexFetchRequest: expect.createSpy()
      }
      const mappedProps = mapStateToProps(state)

      return { fakeDispatchProps, pagination, mappedProps }
    }

    context('when isLast is false', () => {
      it('returns the mergedProps', () => {
        const { pagination, fakeDispatchProps, mappedProps } = mergePropsSetup(0,false)

        const mergedProps = mergeProps(mappedProps,fakeDispatchProps)
        mergedProps.next()
        expect(fakeDispatchProps.comicIndexFetchRequest).toHaveBeenCalledWith({ characters: 1, page: pagination.currentPage + 1 })
      })
    })

    context('when isLast is true', () => {
      it('returns the mergedProps', () => {
        const { pagination, fakeDispatchProps, mappedProps } = mergePropsSetup(0,true)

        const mergedProps = mergeProps(mappedProps,fakeDispatchProps)
        mergedProps.next()
        expect(fakeDispatchProps.comicIndexFetchRequest).toNotHaveBeenCalled()
      })
    })

    context('when currentPage is 0', () => {
      it('returns the mergedProps', () => {
        const { pagination, fakeDispatchProps, mappedProps } = mergePropsSetup(0,true)

        const mergedProps = mergeProps(mappedProps,fakeDispatchProps)
        mergedProps.previous()
        expect(fakeDispatchProps.comicIndexFetchRequest).toNotHaveBeenCalled()
      })
    })

    context('when currentPage is 1', () => {
      it('returns the mergedProps', () => {
        const { pagination, fakeDispatchProps, mappedProps } = mergePropsSetup(2,true)

        const mergedProps = mergeProps(mappedProps,fakeDispatchProps)
        mergedProps.previous()
        expect(fakeDispatchProps.comicIndexFetchRequest).toHaveBeenCalledWith({ characters: 1, page: pagination.currentPage - 1 })
      })
    })
  })
})

