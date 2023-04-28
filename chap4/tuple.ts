import R from 'ramda'

// checkType :: Type -> Object -> Object
const checkType = R.curry((typeDef, obj) => {
  if (!R.is(typeDef, obj)) {
    let type = typeof obj
    throw new TypeError(`Type mismatch. Expected [ ${typeDef} ] but found [ ${type} ]`)
  }
  return obj
})

export const Tuple = function(...types: unknown[]) {
  class _T {
    constructor(...values: unknown[]) {
      if (values.some(v => v == null)) {
        throw new ReferenceError('Tuples may not have any null values.')
      }
      if (values.length !== types.length) {
        throw TypeError('Tuple arity does not match its prototype.')
      }
      values.map((v, index) => {
        Object.defineProperty(this, `_${index + 1}`, {
          value: checkType(types[index])(v),
          enumerable: true,
        })
      })
      Object.freeze(this)
    }
    values() {
      return Object.values(this)
    }
  }
  return _T
}

// const sp = Tuple(String, String)
// const n = new sp('hoge', 'puyo')
// console.log(n.values())