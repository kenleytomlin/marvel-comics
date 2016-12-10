import { mapStateToProps } from '../../../containers/comic/ComicContainer'
import comicResponse from '../../fixtures/comic'

const setup = () => {
  const comic = comicResponse()
  const state = {
    comics: {
      voted: [1],
      comics: {
        1: comic
      }
    }
  }

  return {
    state,
    comic
  }
}

describe('containers', () => {
  describe('comic/ComicContainer', () => {
    describe('mapStateToProps', () => {
      it('returns the correct props', () => {
        const { state, comic } = setup()
        const expected = {
          id: comic.id,
          title: comic.title,
          issueNumber: comic.issueNumber,
          thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
        }

        expect(mapStateToProps(state,{ id: 1 })).toEqual(expected)
      })
    })
  })
})
