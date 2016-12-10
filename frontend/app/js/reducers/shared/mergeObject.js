const mergeObject = (SUCCESS_TYPE,entity) => {
  if(!SUCCESS_TYPE || !entity) {
    throw new Error('A SUCCESS_TYPE and entity must be passed to mergeObject')
  } else {
    return (state = {},action) => {
      switch(action.type) {
        case SUCCESS_TYPE:
          return Object.assign({},state,action.payload.entities[entity])
        default:
          return state
      }
    }
  }
}

export default mergeObject
