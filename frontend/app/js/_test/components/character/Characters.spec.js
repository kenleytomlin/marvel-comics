import Characters from '../../../components/character/Characters'
import CharacterContainer from '../../../containers/character/CharacterContainer'
import Empty from '../../../components/character/Empty'
import {
  LoaderOverlay
} from '../../../components/style/loader'

const setup = (ids = [1,2], isFetching = false) => {
  const props = {
    ids,
    isFetching
  }

  const output = shallow(<Characters { ...props } />)

  return {
    props,
    output
  }
}

describe('components', () => {
  describe('character/Characters', () => {
    context('when isFetching is false', () => {
      it('renders the correct number of CharacterContainer', () => {
        const { output } = setup()

        expect(output.find(CharacterContainer).length).toEqual(2)
      })
    })
  })
})
