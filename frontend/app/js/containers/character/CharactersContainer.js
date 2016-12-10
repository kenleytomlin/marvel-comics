import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Characters from '../../components/character/Characters'
import { getCharacterIds, getCharacterIsFetching } from '../../selectors/character'

export const mapStateToProps = state => {
  return {
    ids: getCharacterIds(state),
    isFetching: getCharacterIsFetching(state)
  }
}

export default connect(mapStateToProps)(Characters)

