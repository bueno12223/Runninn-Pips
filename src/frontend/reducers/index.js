const reducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {
        ...state,
        ...action.payload
      }
    case 'REGISTER_DATA':
      return {
        ...state,
        [action.payload.name]: action.payload.data
      }
    case 'MESSAGE_HANDLER':
      return {
        ...state,
        message: action.payload
      }
    default:
      return state
  }
}
export default reducer
