import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getCharacterSearch } from '../../selectors/character'
import { default as actions } from '../../actions/character'
import Search from '../../components/character/Search'

export const mapStateToProps = state => {
  return {
    characterParams: getCharacterSearch(state),
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    characterSearchUpdate: actions.characterSearchUpdate,
    characterSearchClear: actions.characterSearchClear,
    characterIndexFetchRequest: actions.characterIndexFetchRequest,
  },dispatch)
}

export const mergeProps = (stateProps,dispatchProps) => {
  return Object.assign({},stateProps,{
    onChange: (search) => {
      dispatchProps.characterSearchUpdate(search)
      dispatchProps.characterSearchClear()
      if(stateProps.characterParams.nameStartsWith.length >= 3)
        dispatchProps.characterIndexFetchRequest(stateProps.characterParams)
    }
  })
}

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(Search)

