import React, { Component } from 'react'
import { asyncConnect } from 'redux-connect'
import { startUp } from '../../sagas/comic'
import { getComicIds, getComicIsFetching } from '../../selectors/comic'
import Comics from '../../components/comic/Comics'

export const mapStateToProps = state => {
  return {
    ids: getComicIds(state),
    isFetching: getComicIsFetching(state)
  }
}

@asyncConnect([{
  promise: ({ store }) => {
    const task = store.runSaga(startUp,{ payload: { pathname: '/v1/comics', method: 'get' } })
    return task.done
  }
}],mapStateToProps)

export default class ComicsContainer extends Component {
  render() {
    return(<Comics {...this.props } />)
  }
}
