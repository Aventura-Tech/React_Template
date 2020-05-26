export default function RequestError (error = {
  message: 'error',
  title: 'Request Error'
}) {
  this.title = error.title ? error.title : 'Request Error'
  this.message = error.message ? error.message : 'error'
  this.action = 'request_error'
  this.status = 500
  this.fields = {}
  this.stack = error.stack ? error.stack.split('    ') : ''

  this.setField = (field, message = '') => {
    this.fields = {
      ...this.fields,
      [field]: message
    }
  }

  this.setMessage = str => {
    if (typeof str !== 'string') return false
    this.message = str
    return true
  }
}
