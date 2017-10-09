import Pagination from '../../../components/comic/Pagination'
import paginationResponse from '../../fixtures/pagination'
import {
  NextButton,
  PreviousButton
} from '../../../components/comic/style'

const setup = (currentPage,isLast) => {
  const pagination = paginationResponse(currentPage,isLast)
  const props = {
    ...pagination,
    next: expect.createSpy(),
    previous: expect.createSpy()
  }

  const output = shallow(<Pagination {...props} />)

  return {
    output,
    props
  }
}

describe('components', () => {
  describe('comic/Pagination', () => {
    context('when isLast is true', () => {
      it('doesnt render the NextButton', () => {
        const  { output, props } = setup(0,true)

        expect(output.find(NextButton).length).toEqual(0)
      })
    })
    context('when isLast is false', () => {
      it('renders the NextButton', () => {
        const { output, props } = setup(0,false)

        expect(output.find(NextButton).length).toEqual(1)
      })

      it('calls next when the NextButton is clicked', () => {
        const { output, props } = setup(0,false)

        output.find(NextButton).simulate('click')
        expect(props.next).toHaveBeenCalled()
      })
    })

    context('when currentPage is 0', () => {
      it('doesnt render the PreviousButton', () => {
        const { output, props } = setup(0,false)

        expect(output.find(PreviousButton).length).toEqual(0)
      })
    })

    context('when currentPage is > 0', () => {
      it('calls previous when the PreviousButton is clicked', () => {
        const { output, props } = setup(1,false)

        output.find(PreviousButton).simulate('click')
        expect(props.previous).toHaveBeenCalled()
      })

      it('renders the PreviousButton', () => {
        const { output, props } = setup(1,false)

        expect(output.find(PreviousButton).length).toEqual(1)
      })
    })
  })
})
