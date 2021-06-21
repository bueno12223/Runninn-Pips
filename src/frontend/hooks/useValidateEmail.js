function useValidateEmail (value) {
  const re = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/
  return (!re.exec(value))
}

export default useValidateEmail
