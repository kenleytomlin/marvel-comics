import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { default as actions } from '../../actions/character'
import { default as comicActions } from '../../actions/comic'
import Character from '../../components/character/Character'
import { getCharacterById, getCharacterThumbnail } from '../../selectors/character'

export const mapStateToProps = (state,{ id }) => {
  const character = getCharacterById(state,id)
  const thumbnail = getCharacterThumbnail(state,id)

  return {
    id: character.id,
    name: character.name,
    thumbnail
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ characterSelect: actions.characterSelect, characterSearchClear: actions.characterSearchClear, comicIndexFetchRequest: comicActions.comicIndexFetchRequest },dispatch)
}

export const mergeProps = (stateProps,dispatchProps) => {
  return Object.assign({},stateProps,{
    onClick: () => {
      dispatchProps.characterSelect(stateProps.id)
      dispatchProps.comicIndexFetchRequest({ characters: stateProps.id })
      dispatchProps.characterSearchClear()
    }
  })
}

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(Character)
