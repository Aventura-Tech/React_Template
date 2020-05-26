export default class Interface {
  /**
   * Asigna los datos a tu modelo interface
   * @param {Interface} modelInterface You model interface
   * @param {Object} data Datos por asignaar
   * @param {String|Number} id Identificador del dato (Optional)
   */
  static assignData (modelInterface = new Interface(), data = Object, id = 0) {
    if (modelInterface instanceof Interface) {
      for (const key in modelInterface) {
        const prop = data[key]
        // eslint-disable-next-line no-prototype-builtins
        if (modelInterface.hasOwnProperty(key)) {
          // eslint-disable-next-line no-prototype-builtins
          if (typeof prop === 'object' && prop.hasOwnProperty('firestore') && prop.id !== undefined) {
            modelInterface[key] = prop.id
          } else {
            modelInterface[key] = prop
          }
        }
      }
      if (id) {
        modelInterface.id = id
      }
    } else {
      throw new Error('Require a interface')
    }
  }
}
