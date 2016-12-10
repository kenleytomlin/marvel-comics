import Upvote from '../../../components/comic/Upvote'

const setup = () => {
  const props = {
    id: 1,
    onClick: expect.createSpy()
  }

  const output = shallow(<Upvote { ...props } />)

  return { output, props }
}

describe('components', () => {
  describe('comic/Upvote', () => {
    it('calls onClick when clicked', () => {
      const { output, props } = setup()
      output.find('.upvote-btn').simulate('click')

      expect(props.onClick).toHaveBeenCalled()
    })
  })
})
