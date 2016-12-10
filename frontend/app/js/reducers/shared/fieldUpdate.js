const fieldUpdate = (type) => {
  if(!type) {
    throw new Error('A type must be passed to fieldUpdate')
  } else {
    return (state = '',action) => {
      switch(action.type) {
        case type:
          return action.payload
        default:
          return state
      }
    }
  }
}

export default fieldUpdate
