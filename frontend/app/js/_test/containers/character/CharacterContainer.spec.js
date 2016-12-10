import { mapStateToProps, mergeProps } from '../../../containers/character/CharacterContainer'
import characterResponse from '../../fixtures/character'

const setup = () => {
  const character = characterResponse()

  const state = {
    characters: {
      characters: {
        1: character
      }
    }
  }

  return {
    character,
    state
  }
}

describe('containers', () => {
  describe('character/CharacterContainer', () => {
    describe('mapStateToProps', () => {
      it('returns the correct props',() => {
        const { state, character } = setup()

        expect(mapStateToProps(state,{ id: 1 })).toEqual({
          id: character.id,
          name: character.name,
          thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`
        })
      })
    })

    describe('mergeProps', () => {
      it('returns the mergedProps', () => {
        const { state, character } = setup()
        const mappedProps = mapStateToProps(state,{ id: 1 })
        const fakeDispatchProps = {
          characterSelect: expect.createSpy(),
          comicIndexFetchRequest: expect.createSpy(),
          characterSearchClear: expect.createSpy()
        }
        const mergedProps = mergeProps(mappedProps,fakeDispatchProps)
        mergedProps.onClick()

        expect(fakeDispatchProps.characterSelect).toHaveBeenCalledWith(character.id)
        expect(fakeDispatchProps.characterSearchClear).toHaveBeenCalled()
        expect(fakeDispatchProps.comicIndexFetchRequest).toHaveBeenCalledWith({ characters: character.id })
      })
    })
  })
})

