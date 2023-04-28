import R from 'ramda'
import _ from "lodash"

function compose(...fns: Function[]) {
  const start = fns.length - 1
  return function (...args: unknown[]) {
    let i = start
    let result = fns[start].apply(fns[start], args)
    while (i--) {
      // iが0（false）になるまでループ
      result = fns[i].call(fns[i], result)
    }
    return result
  }
}

const str = `we can onle see`
const explode = (str: string) => str.split(/\s+/)
const count = (arr: unknown[]) => arr.length
const countWords = compose(count, explode)
// console.log(countWords(str))

const trim = (str: string) => str.replace(/^\s*|\s*$/g, '')
const normalize = (str: string) => str.replace(/\-/g, '')
const validLength = (param: number, str: string) => str.length === param
const checkLengthSsn = _.partial(validLength, 9)
const cleanInput = R.compose(normalize, trim)
const isValidSsn = R.compose(checkLengthSsn, cleanInput)
const r = cleanInput(' 444-44-4444 ')
console.log(isValidSsn(r))
