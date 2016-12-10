import Character from '../../../components/character/Character'

const setup = () => {
  const props = {
    name: 'Wolverine',
    id: 1,
    onClick: expect.createSpy()
  }

  const output = shallow(<Character {...props} />)

  return {
    output,
    props
  }
}

describe('components', () => {
  describe('character/Character', () => {
    it('calls onClick when clicked', () => {
      const { output, props } = setup()

      output.find('.character-container').simulate('click')

      expect(props.onClick).toHaveBeenCalled()
    })
  })
})
