/* eslint-disable no-console */
export default class Req {
  GET = 'GET'

  ADD = 'ADD'

  REMOVE = 'REMOVE'

  LIST = 'LIST'

  PUT = 'PUT'

  _listCallback = {}

  on (KEY = '_error', callback) {
    this._listCallback[KEY] = callback
  }

  notify (KEY, payload = null) {
    if (!KEY) {
      console.error('Require a key')
      return
    }
    if (this._listCallback[KEY] === undefined) {
      console.warn(`on method with key "${KEY}" not found registered`)
      return
    }

    this._listCallback[KEY](payload)
  }
}
