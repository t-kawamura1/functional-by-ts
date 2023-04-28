export class Either {
  constructor(
    protected readonly _value: unknown,
  ) {}

  get value() {
    return this._value
  }

  static left(a: unknown) {
    return new Left(a);
  }
  static right(a: unknown) {
    return new Right(a)
  }
  static fromNullable(v: unknown) {
    return v != null ? Either.right(v) : Either.left(v)
  }
  static of(v: unknown) {
    return Either.right(v)
  }
}

export class Left extends Either {
  map(_: unknown): Left {
    return this;
  }

  get value() {
    throw new TypeError("Can't extract the value of a Left(a).")
  }

  getOrElse(other: unknown): unknown {
    return other
  }

  orElse(fn: Function): unknown {
    return fn(this._value)
  }

  chain(fn: Function): Left {
    return this
  }

  getOrElseThrow(msg: string) {
    throw new Error(msg)
  }

  filter(fn: Function): Left {
    return this
  }

  toString() {
    return `Either.Left(${this._value})`
  }
}

export class Right extends Either {
  map(fn: Function): Right {
    return Either.of(fn(this._value))
  }

  get value() {
    return this._value
  }

  getOrElse(other: unknown): unknown {
    return this._value
  }

  orElse(_: unknown): Right {
    return this
  }

  chain(fn: Function): unknown {
    return fn(this._value)
  }

  getOrElseThrow(_: string) {
    return this.value
  }

  filter(fn: Function): Either {
    return Either.fromNullable(fn(this._value) ? this._value : null)
  }

  toString() {
    return `Either.Right(${this._value})`
  }
}
