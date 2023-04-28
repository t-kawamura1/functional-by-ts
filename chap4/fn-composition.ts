import R from 'ramda'
import {Tuple} from "./tuple";

const Node = Tuple(Object, Tuple)
const element = R.curry((v, tuple) => new Node(v, tuple))

const str = `we can onle see`
const explode = (str: string) => str.split(/\s+/)
const count = (arr: unknown[]) => arr.length
const countWords = R.compose(count, explode)
console.log(countWords(str))