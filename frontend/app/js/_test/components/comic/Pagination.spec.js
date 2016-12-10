import Pagination from '../../../components/comic/Pagination'
import paginationResponse from '../../fixtures/pagination'

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
      it('doesnt render the next button', () => {
        const  { output, props } = setup(0,true)

        expect(output.find('.comic-next-btn').length).toEqual(0)
      })
    })
    context('when isLast is false', () => {
      it('renders the next button', () => {
        const { output, props } = setup(0,false)

        expect(output.find('.comic-next-btn').length).toEqual(1)
      })

      it('calls next when the next button is clicked', () => {
        const { output, props } = setup(0,false)

        output.find('.comic-next-btn').simulate('click')
        expect(props.next).toHaveBeenCalled()
      })
    })

    context('when currentPage is 0', () => {
      it('doesnt render the previous button', () => {
        const { output, props } = setup(0,false)

        expect(output.find('comic-previous-btn').length).toEqual(0)
      })
    })

    context('when currentPage is > 0', () => {
      it('calls previous when the previous button is clicked', () => {
        const { output, props } = setup(1,false)

        output.find('.comic-previous-btn').simulate('click')
        expect(props.previous).toHaveBeenCalled()
      })

      it('renders the previous button', () => {
        const { output, props } = setup(1,false)

        expect(output.find('.comic-previous-btn').length).toEqual(1)
      })
    })
  })
})
