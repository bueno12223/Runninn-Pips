const reducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {
        ...action.payload
      }
    case 'MESSAGE_HANDLER':
      return {
        ...state,
        message: action.payload
      }
    case 'REGISTER_TOKEN':
      console.log(action.payload)
      return {
        ...state,
        tokens: action.payload
      }
    default:
      return state
  }
}
export default reducer
