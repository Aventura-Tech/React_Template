import moment from 'moment'
import { refreshAPI } from '../../../../../config/App'
import { data } from '../store/data.state'
import { initialized } from '../store/initial.state'

function isEmpty (form) {
  if (form.username === '' || form.password === '') {
    return 'Complete the required fields'
  }

  return false
}

export default function login () {
  const res = isEmpty(data)
  if (res) {
    initialized.message = res
    return false
  }

  if (data.username !== 'admin' || data.password !== '123456') {
    initialized.message = res
    return false
  }
  // const res = await API.post('/login', payload)
  // const expireIn = res.data.result.expire_in - res.data.result.created_at // Esto la API me deberá retornar
  const expireIn = 9999 // Time Total for expire (s)
  const access_token = '123456asdqwe'
  const currentUnix = moment().unix()

  localStorage.setItem('token', 'Bearer ' + access_token)
  localStorage.setItem('expireIn', currentUnix.toString() + expireIn)
  initialized.message = ''
  refreshAPI()
  initialized.isSession = true
}
