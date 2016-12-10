const pagination = (SUCCESS_TYPE) => {
  if(!SUCCESS_TYPE) {
    throw new Error('A SUCCESS_TYPE must be passed to pagination')
  } else {
    return (state = { isLast: true, totalElements: 0, currentPage: 0, totalPages: 0 }, action) => {
      switch(action.type) {
        case SUCCESS_TYPE:
          return action.payload.result.pagination
        default:
          return state
      }
    }
  }
}

export default pagination
