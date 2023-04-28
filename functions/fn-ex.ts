function add(a: number) {
  return function (b: number) {
    return a + b
  }
}
// console.log(add(5)(9))

function negate(func: any) {
  return function (func: any) {
    return !func.apply(null, arguments)
  }
}

function isNull(val: any) {
  return val === null
}

const isNotNull = negate(isNull)

// console.log(isNotNull(null))
// console.log(isNotNull())

const MyModule = (function MyModule(mmExport: {[key: string]: Function}) {
  const _pv = 'hoge'
  mmExport.method1 = () => _pv
  return mmExport
})({})

// console.log(MyModule.method1())

function ValueObj(value: string) {
  const _value = value
  return {
    value: _value
  } as const
}
const vo = ValueObj('hoge')
console.log(vo.value)