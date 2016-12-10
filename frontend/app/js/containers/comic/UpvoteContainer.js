import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getComicIsUpvoted } from '../../selectors/comic'
import { default as actions } from '../../actions/comic'
import Upvote from '../../components/comic/Upvote'

export const mapStateToProps = (state,{ id }) => {
  const isUpvoted = getComicIsUpvoted(state,id)

  return {
    id,
    isUpvoted
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions,dispatch)
}

export const mergeProps = (stateProps,dispatchProps) => {
  return Object.assign({},stateProps,{
    onClick: () => {
      if(stateProps.isUpvoted)
        dispatchProps.comicIndexDownvoteRequest(stateProps.id)
      if(!stateProps.isUpvoted)
        dispatchProps.comicIndexUpvoteRequest(stateProps.id)
    }
  })
}

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(Upvote)
