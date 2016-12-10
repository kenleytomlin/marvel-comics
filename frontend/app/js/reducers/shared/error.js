import { isArray } from 'lodash'

const error = (actions) => {

  if(!isArray(actions)) {
    throw new Error('An array of [ERROR_TYPE,SUCCESS_TYPE] must be passed to error reducer')
  } else {
    const [ERROR_TYPE,SUCCESS_TYPE] = actions
    return (state = false, action) => {
      switch(action.type) {
        case ERROR_TYPE:
          return true
        case SUCCESS_TYPE:
          return false
        default:
          return state
      }
    }
  }
}

export default error
