/**
 * Convert an Object to Path url
 * @param {object} obj Requires an object type
 */
const parseQuery = (obj = null) => {
  if (obj === null || obj === '') return ''
  if (typeof obj !== 'object') throw new Error('Requires an Object Type')
  let url = '?'
  let count = 0
  for (const key in obj) {
    url += `${key}=${obj[key]}&`
    count++
  }

  if (count === 0) return ''
  return '/' + url.slice(0, -1)
}

export default parseQuery
