import Pagination from '../../components/comic/Pagination'
import { bindActionCreators } from 'redux'
import { getComicPagination } from '../../selectors/comic'
import { getSelectedCharacter } from '../../selectors/character'
import { default as actions } from '../../actions/comic'
import { connect } from 'react-redux'

export const mapStateToProps = state => {
  return {
    ...getComicPagination(state),
    selected: getSelectedCharacter(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    comicIndexFetchRequest: bindActionCreators(actions.comicIndexFetchRequest,dispatch)
  }
}

export const mergeProps = (stateProps,dispatchProps) => {
  return Object.assign({},stateProps,{
    next: () => {
      if(stateProps.isLast !== true) {
        dispatchProps.comicIndexFetchRequest({ characters: stateProps.selected, page: stateProps.currentPage + 1 })
      }
    },
    previous: () => {
      if(stateProps.currentPage > 0) {
        dispatchProps.comicIndexFetchRequest({ characters: stateProps.selected, page: stateProps.currentPage - 1 })
      }
    }
  })
}

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(Pagination)
