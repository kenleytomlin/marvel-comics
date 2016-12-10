const ids = (SUCCESS_TYPE) => {
  if(!SUCCESS_TYPE) {
    throw new Error('A SUCCESS_TYPE must be passed to ids')
  } else {
    return (state = [], action) => {
      switch(action.type) {
        case SUCCESS_TYPE:
          return action.payload.result.results
        default:
          return state
      }
    }
  }
}

export default ids

