import R from "ramda"

export class Wrapper {
  private constructor(
    private readonly _value: unknown
  ) {}

  static of(v: unknown): Wrapper {
    return new Wrapper(v)
  }

  map(fn: Function): Wrapper {
    return Wrapper.of(fn(this._value))
  }

  join(): Wrapper {
    if (!(this._value instanceof Wrapper)) {
      return this
    }
    return this._value.join()
  }

  get(): unknown {
    return this._value
  }

  toString(): string {
    return `Wrapper (${this._value})`
  }
}

// const wrap = (v: unknown) => new Wrapper(v)

// const wrappedValue = wrap('Get Functional')
// console.log(wrappedValue.map(R.toUpper))
// wrappedValue.map(console.log)

console.log(
  Wrapper.of(Wrapper.of(Wrapper.of('Get Functional'))).join()
)

