export default function ValidateError (message = '') {
  this.title = 'Validate Error'
  this.message = message
  this.action = 'validate_field'
  this.status = 500
  this.fields = {}
  this.exceptionManager = true
  this.setField = (field, message = '') => {
    this.fields = {
      // ...(this.fields && this.field),
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
