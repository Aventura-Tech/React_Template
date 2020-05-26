export default class Filter {
  page = 1

  order = 'desc'

  // asc || desc
  search = ''

  sort = 'id'

  limit = 10

  /**
   * Agrega nuevos campos o reemplaza su valor a tu instancia
   * @param {Filter} filterInstance Instance of Filter
   * @param {Object} queries Query filter
   */
  static append (filterInstance = new Filter(), queries = Object()) {
    if (filterInstance instanceof Filter) {
      for (const key in queries) {
        filterInstance[key] = queries[key]
      }
    }
  }

  /**
   * Reinicia las propiedades de la instancia de Filter
   * @param {Filter} filterInstance Instance of Filter
   */
  static init (filterInstance = new Filter()) {
    filterInstance.page = 1
    filterInstance.order = 'desc'
    filterInstance.search = ''
    filterInstance.sort = 'id'
    filterInstance.limit = 10
  }
}
