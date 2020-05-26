import validator from 'validator'
import ValidateError from '../errors/ValidateError'

export default class Validate {
  _currentFieldName = false

  _currentFieldValue = false

  _body_form = false

  _validateError = new ValidateError('Complete the field required')

  /**
   * Validate a data object
   * @param {Object} body_form Object body form
   * @param {string} general_message General message for error
   */
  constructor (body_form, general_message) {
    this._body_form = body_form
    this._validateError.setMessage(general_message)

    const existsField = () => {
      if (this._validateError.fields[this._currentFieldName]) {
        return true
      }
      return false
    }

    this._methods = {

      isEmpty: message => {
        if (existsField()) return this._methods
        if (this._currentFieldValue === null || this._currentFieldValue === undefined) {
          this._validateError.setField(this._currentFieldName, message)
          return this._methods
        }
        if (validator.isEmpty(this._currentFieldValue.toString(), { ignore_whitespace: false })) {
          this._validateError.setField(this._currentFieldName, message)
        }
        return this._methods
      },

      isNotEmail: message => {
        if (existsField()) return this._methods
        if (!validator.isEmail(this._currentFieldValue)) {
          this._validateError.setField(this._currentFieldName, message)
        }
        return this._methods
      },

      isNotNumeric: (message, no_symbols = true) => {
        if (existsField()) return this._methods

        if (this._currentFieldValue === null || this._currentFieldValue === undefined) {
          this._validateError.setField(this._currentFieldName, message)
          return this._methods
        }

        if (!validator.isNumeric(this._currentFieldValue.toString(), { no_symbols })) {
          this._validateError.setField(this._currentFieldName, message)
        }
        return this._methods
      },

      isNotURL: message => {
        if (existsField()) return this._methods
        if (!validator.isURL(this._currentFieldValue)) {
          this._validateError.setField(this._currentFieldName, message)
        }
        return this._methods
      },

      isNotBoolean: message => {
        if (existsField()) return this._methods
        if (!validator.isBoolean(this._currentFieldValue)) {
          this._validateError.setField(this._currentFieldName, message)
        }
        return this._methods
      },

      /**
       * @param {String} message Mensaje de error
       * @param {Number} decimal_digits Número de dígitos maximos del decimal
       * @param {Boolean} force_decimal Fuerza a que se cumpla el valor máximo de decimales
       */
      isNotDecimal: (message, decimal_digits = 2, force_decimal = false) => {
        if (existsField()) return this._methods
        if (!validator.isDecimal(this._currentFieldValue, { force_decimal, decimal_digits, locale: 'en-US' })) {
          this._validateError.setField(this._currentFieldName, message)
        }
        return this._methods
      },

      isNotEqual: (comparison, message) => {
        if (existsField()) return this._methods
        if (!validator.equals(this._currentFieldValue, comparison)) {
          this._validateError.setField(this._currentFieldName, message)
        }
        return this._methods
      },

      isNotInt: (message) => {
        if (existsField()) return this._methods
        if (!Number.isInteger(this._currentFieldValue)) {
          this._validateError.setField(this._currentFieldName, message)
        }
        return this._methods
      },

      isNotLength: (max = 255, message) => {
        if (existsField()) return this._methods
        if (!validator.isLength(this._currentFieldValue, { min: 0, max })) {
          this._validateError.setField(this._currentFieldName, message)
        }
        return this._methods
      },

      notContains: (seed, message) => {
        if (existsField()) return this._methods
        if (!validator.contains(this._currentFieldValue, seed)) {
          this._validateError.setField(this._currentFieldName, message)
        }
        return this._methods
      },

      run: () => {
        this._currentFieldName = false
        this._currentFieldValue = false
        if (Object.values(this._validateError.fields).length > 0) {
          throw this._validateError
        }
        return true
      }
    }
  }

  field (fieldname) {
    if (typeof fieldname !== 'string') throw new Error('Fieldname be a string')
    if (this._body_form[fieldname] === undefined) throw new Error(`Fieldname[${fieldname}]:  not found in the object body form`)
    this._currentFieldName = fieldname
    this._currentFieldValue = this._body_form[fieldname]
    return this._methods
  }

  omit (fields_name_arr = []) {
    if (!Array.isArray(fields_name_arr)) throw new Error('Is not a array of fieldnames')
    for (const field_name of fields_name_arr) {
      if (this._validateError.fields[field_name] === undefined) throw new Error(`Fieldname[${field_name}]:  not found in the object body form`)
      const { [field_name]: field, ...fields } = this._validateError.fields
      this._validateError.fields = { ...fields }
    }
  }

  only (fields_name_arr) {
    if (!Array.isArray(fields_name_arr)) throw new Error('Is not a array of fieldnames')
    const fields = {}
    for (const field_name of fields_name_arr) {
      if (this._validateError.fields[field_name] === undefined) throw new Error(`Fieldname[${field_name}]:  not found in the object body form`)
      fields[field_name] = this._validateError.fields[field_name]
    }
    this._validateError.fields = { ...fields }
  }

  run = () => {
    return this._methods.run()
  }
}
