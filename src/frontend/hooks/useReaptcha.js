import { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'
import { useDispatch } from 'react-redux'
const useReaptcha = (capchat) => {
  const [failLogin, setFailLogin] = useLocalStorage('recaptcha', 0)
  const dispatch = useDispatch()
  const [onLoad, setLoad] = useState(false)
  const [verify, setVerify] = useState(failLogin <= 5)
  const messageHandler = (payload) => {
    dispatch({ type: 'MESSAGE_HANDLER', payload })
  }
  useEffect(() => {
    console.log(failLogin >= 5, onLoad)
    setVerify(failLogin <= 5)
    failLogin >= 5 && onLoad && capchat.current.renderExplicitly()
  }, [onLoad, failLogin])
  const onFail = () => {
    setFailLogin(failLogin + 1)
  }
  const onVerify = () => {
    setVerify(true)
  }
  return { verify, onFail, setLoad, onVerify, messageHandler }
}
export default useReaptcha
