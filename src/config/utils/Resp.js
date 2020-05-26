import Interface from './Interface'

/* eslint-disable no-console */
export default function Resp (id = false) {
  this.message = ''
  this.tools = {}
  this.date = Date.now()
  this._fields = {}
  this._dataArr = []
  this.pagination = {
    page: 1,
    pages: 1,
    total: 0
  }

  if (id !== false) {
    if (id === '' || id === null || id === undefined) {
      console.error('The id should not be empty')
      return
    }

    if (!(typeof id === 'string' || typeof id === 'number')) {
      console.error('Is not a string or number')
    }
  }

  this.id = id

  this.setData = (dataFields = Object()) => {
    if (dataFields instanceof Object || dataFields instanceof Interface) {
      this._fields = dataFields
      this._dataArr.push(dataFields)
    } else {
      console.error('setData method: Is not a Object or not a instance of Interface')
    }
  }

  this.setList = (dataArr = Array, pagination = {
    page: 1,
    pages: 1,
    total: 0
  }) => {
    if (!Array.isArray(dataArr)) {
      console.error('setList method: Is not a Array')
      return
    }

    this._dataArr = [...dataArr]
    this.pagination = {
      page: pagination.page ? pagination.page : 1,
      pages: pagination.pages ? pagination.pages : 1,
      total: pagination.total ? pagination.total : 0
    }
  }

  this.data = () => {
    return this._fields
  }

  /**
    * Fields Data
    * @return {Array}
    */
  this.list = () => {
    return [...this._dataArr]
  }
}
