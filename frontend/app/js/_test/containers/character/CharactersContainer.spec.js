import { mapStateToProps } from '../../../containers/character/CharactersContainer'

const setup = () => {
  const state = {
    characters: {
      ids: [1,2],
      isFetching: false
    }
  }

  return state
}

describe('containers', () => {
  describe('containers/CharactersContainer', () => {
    describe('mapStateToProps', () => {
      it('returns the correct props', () => {
        const state = setup()

        expect(mapStateToProps(state)).toEqual({
          ids: [1,2],
          isFetching: false
        })
      })
    })
  })
})
