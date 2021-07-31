import { loginStudent, singup, setStudentAccont, logOutUser } from './student'
import { searchVideo, sendMessage } from './getData'
import { validatePayment } from './transacction'
import { messageHandler } from './states'
import { validatePassword, resetPassword } from './resetPassword'

export {
  loginStudent, singup, setStudentAccont, logOutUser,
  sendMessage,
  searchVideo, messageHandler, validatePayment, resetPassword, validatePassword
}
