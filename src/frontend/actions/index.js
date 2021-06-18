import * as student from './student'
import * as getData from './getData'
import * as transaccion from './transacction'
export default {
  ...student,
  ...getData,
  ...transaccion
}
