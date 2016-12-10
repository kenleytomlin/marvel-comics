import { mapStateToProps } from '../../../containers/comic/ComicsContainer'

const setup = () => {
  const state = {
    comics: {
      ids: [1,2,3],
      isFetching: false
    }
  }

  return state
}

describe('containers', () => {
  describe('comic/ComicsContainer', () => {
    it('returns the correct props', () => {
      const state = setup()
      const expected = {
        ids: [[1,2,3]],
        isFetching: false
      }

      expect(mapStateToProps(state)).toEqual(expected)
    })
  })
})
