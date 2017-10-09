import Upvote from '../../../components/comic/Upvote'
import {
  VoteButton
} from '../../../components/comic/style'

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
      output.find(VoteButton).simulate('click')

      expect(props.onClick).toHaveBeenCalled()
    })
  })
})
