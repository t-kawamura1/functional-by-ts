const { map } = require('lodash');
var R = require('ramda');

class Wrapper {
  constructor(value) {
    this._value = value;
  }

  static of(a) {
    return new Wrapper(a)
  }

  map(f) {
    return Wrapper.of(f(this._value));
  }

  join() {
    if (!(this._value instanceof Wrapper)) {
      return this
    }
    return this._value.join()
  }

  get() {
    return this._value
  }

  toString() {
    return 'Wrapper (${this._value})';
  }
}

const wrap = (val) => new Wrapper(val);

const wrappedValue = wrap('Get Functional');

Wrapper.prototype.fmap = function (f) {
  return wrap(f(this._value))
}

const plus = R.curry((a, b) => a + b)
const plus3 = plus(3)
const plus10 = plus(10)
const two = wrap(2)
const five = two.fmap(plus3).fmap(plus10)
// two.fmap(plus3).fmap(R.tap(infoLogger))

class Empty {
  map(f) {
    return this
  }

  fmap(_) {
    return new Empty();
  }

  toString() {
    return 'Empty ()'
  }
}

const empty = () => new Empty()

const isEven = (n) => Number.isFinite(n) && (n % 2 === 0)
const half = (val) => isEven(val) ? wrap(val / 2) : empty()


  Wrapper.of('Hello Monads!')
    .map(R.toUpper)
    .map(R.identity)
