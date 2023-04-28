// // import * as R from 'ramda'

// const checkType = R.curry((typeDef, obj) => {
//   if (!R.is(typeDef, obj)) {
//     let type = typeof obj
//     throw new TypeError(`Type mismatch. Expected [ ${typeDef} ] but found [ ${type} ]`)
//   }
//   return obj
// })

// const Tuple = function () {
//   const typeInfo = Array.prototype.slice.call(arguments, 0)
//   const _T = function() {
//     const values = Array.prototype.slice.call(arguments, 0)
//     if (values.some(v => v == null)) {
//       throw new ReferenceError('Tuples may not have any null values.')
//     }
//     if (values.length !== typeInfo.length) {
//       throw TypeError('Tuple arity does not match its prototype.')
//     }
//     values.map((v, index) => {
//       this['_' + (index + 1)] = checkType(typeInfo[index])(v)
//     }, this)
//     Object.freeze(this)
//   }
//   _T.prototype.values = function() {
//     return Object.keys(this).map(k => this[k], this)
//   }
//   return _T
// }

// const StrPair = Tuple(String, String)
// const namee = new StrPair('BB', 'CC')
// console.log(namee.values())