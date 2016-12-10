import Comic from '../../../components/comic/Comic'
import UpvoteContainer from '../../../containers/comic/UpvoteContainer'

const setup = () => {
  const props = {
    id: 1,
    thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a.jpg',
    title: 'Millie the Model (1945) #48',
    issueNumber: 48
  }

  const output = shallow(<Comic { ...props } />)

  return {
    props,
    output
  }
}

describe('components', () => {
  describe('comic/Comic',() => {
    it('renders an image tag with the correct props', () => {
      const { output, props } = setup()

      expect(output.find('img').props().src).toEqual(props.thumbnail)
    })

    it('renders the UpvoteContainer with the correct props', () => {
      const { output, props } = setup()

      expect(output.find(UpvoteContainer).props().id).toEqual(props.id)
      expect(output.find(UpvoteContainer).length).toEqual(1)
    })
  })
})
