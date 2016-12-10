import Comics from '../../../components/comic/Comics'
import ComicContainer from '../../../containers/comic/ComicContainer'

const setup = () => {
  const props = {
    ids: [[1]],
    isFetching: false
  }

  const output = shallow(<Comics { ...props } />)

  return { output, props }
}

describe('components', () => {
  describe('comic/Comics', () => {
    it('renders ComicContainer with the correct props', () => {
      const { output, props } = setup()

      expect(output.find(ComicContainer).props().id).toEqual(1)
      expect(output.find(ComicContainer).length).toEqual(1)
    })
  })
})
