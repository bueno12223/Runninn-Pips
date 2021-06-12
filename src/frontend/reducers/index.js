const reducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {
        ...action.payload
      }
    case 'ERROR_REGISTER':
      console.log(action.payload)
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
export default reducer
