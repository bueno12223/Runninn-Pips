const useClickboard = () => {
  const handleOnClick = (e) => {
    const textField = document.createElement('textarea')
    textField.innerText = e.target.name
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return handleOnClick
}
export default useClickboard
