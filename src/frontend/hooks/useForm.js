import { useState } from 'react'
import useValidateForm from './useValidateForm'
const useForm = (initial) => {
  const [value, setValue] = useState(initial)
  const validate = useValidateForm()
  const onChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
    validate(value)
  }

  return [
    value,
    onChange
  ]
}

export default useForm
