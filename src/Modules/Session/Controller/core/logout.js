import { navigate } from '@reach/router'
import { refreshAPI } from '../../../../../config/App'
import { initialized } from '../store/initial.state'

export default function logout () {
  localStorage.removeItem('token')
  localStorage.removeItem('expireIn')
  initialized.isSession = false
  refreshAPI()
  navigate('/')
}
