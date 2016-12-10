import { mapStateToProps, mergeProps } from '../../../containers/comic/UpvoteContainer'
import comicResponse from '../../fixtures/comic'

const setup = () => {
  const comicOne = comicResponse(1)
  const comicTwo = comicResponse(2)
  const state = {
    comics: {
      voted: [1],
      comics: {
        1: comicOne,
        2: comicTwo
      }
    }
  }
  return { state, comicOne, comicTwo }
}

describe('containers', () => {
  describe('mapStateToProps', () => {
    context('when the comic is upvoted',() => {
      it('returns the correct props', () => {
        const { state, comicOne } = setup()
        const expected = {
          id: comicOne.id,
          isUpvoted: true
        }

        expect(mapStateToProps(state,{id: 1 })).toEqual(expected)
      })
    })

    context('when the comic is not upvoted', () => {
      it('returns the correct props', () => {
        const { state, comicTwo } = setup()
        const expected = {
          id: comicTwo.id,
          isUpvoted: false
        }

        expect(mapStateToProps(state,{ id: 2 })).toEqual(expected)
      })
    })
  })

  describe('mergeProps', () => {
    context('when the comic is upvoted', () => {
      it('returns the mergedProps', () => {
        const { state, comicOne, comicTwo } = setup()
        const mappedProps = mapStateToProps(state,{ id: 1 })
        const fakeDispatchProps = {
          comicIndexUpvoteRequest: expect.createSpy(),
          comicIndexDownvoteRequest: expect.createSpy()
        }
        const mergedProps = mergeProps(mappedProps,fakeDispatchProps)
        mergedProps.onClick()

        expect(fakeDispatchProps.comicIndexDownvoteRequest).toHaveBeenCalledWith(1)
      })
    })

    context('when the comic is not upvoted', () => {
      it('returns the mergedProps', () => {
        const { state, comicOne, comicTwo } = setup()
        const mappedProps = mapStateToProps(state,{ id: 2 })
        const fakeDispatchProps = {
          comicIndexUpvoteRequest: expect.createSpy(),
          comicIndexDownvoteRequest: expect.createSpy()
        }
        const mergedProps = mergeProps(mappedProps,fakeDispatchProps)
        mergedProps.onClick()

        expect(fakeDispatchProps.comicIndexUpvoteRequest).toHaveBeenCalledWith(2)
      })
    })
  })
})
