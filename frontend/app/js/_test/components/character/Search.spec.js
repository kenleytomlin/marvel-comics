import Search from '../../../components/character/Search'
import {
  SearchInput
} from '../../../components/character/style'

const setup = () => {
  const props = {
    params: { nameStartsWith: '' },
    onChange: expect.createSpy(),
  }

  const output = shallow(<Search {...props } />)

  return {
    props,
    output
  }
}

describe('components', () => {
  describe('character/Search', () => {
    it('calls update when the input value changes', () => {
      const { output, props } = setup()

      output.find(SearchInput).simulate('change',{ target: { value: 'wol' }})

      expect(props.onChange).toHaveBeenCalled()
    })
  })
})
