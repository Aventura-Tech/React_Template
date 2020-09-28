const token = localStorage.getItem('token')

export const initialized = {
  isSession: token !== null
}

export const info = {
  message: ''
}
