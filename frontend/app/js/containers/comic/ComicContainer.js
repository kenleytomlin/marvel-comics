import { getComicById, getComicThumbnail } from '../../selectors/comic'
import Comic from '../../components/comic/Comic'
import { connect } from 'react-redux'

export const mapStateToProps = (state,{ id }) => {
  const comic = getComicById(state,id)
  const thumbnail = getComicThumbnail(state,id)
  return {
    ...comic,
    thumbnail,
  }
}

export default connect(mapStateToProps)(Comic)

