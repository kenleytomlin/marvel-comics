import { isArray } from 'lodash'

const isFetching = (actions) => {
  if(!isArray(actions)) {
    throw new Error('An array of [FETCH_TYPE,SUCCESS_TYPE,FAILURE_TYPE] must be passed to isFetching')
  } else {
    const [FETCH_TYPE,SUCCESS_TYPE,FAILURE_TYPE] = actions
    return (state = false,action) => {
      switch(action.type) {
        case FETCH_TYPE:
          return true
        case SUCCESS_TYPE:
          return false
        case FAILURE_TYPE:
          return false
        default:
          return state
      }
    }
  }
}

export default isFetching

