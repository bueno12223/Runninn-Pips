import { useState } from 'react'
import useValidateForm from './useValidateForm'
const useForm = (initial) => {
  const [value, setValue] = useState(initial)
  const validate = useValidateForm()
  const onChange = e => {
    const validation = !!(e.target.name === 'userID' || e.target.name === 'email')
    setValue({
      ...value,
      [e.target.name]: validation ? e.target.value.trim() : e.target.value
    })
    validate(value)
    console.log(value)
  }

  return [
    value,
    onChange
  ]
}

export default useForm
