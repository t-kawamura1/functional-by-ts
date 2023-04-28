export class Maybe {
  protected constructor() {}

  static just(a: unknown): Just {
    return new Just(a)
  }

  static nothing(): Nothing {
    return new Nothing()
  }

  static fromNullable(a: unknown): Maybe {
    return a != null ? Maybe.just(a) : Maybe.nothing()
  }

  static of(a: unknown): Just {
    return this.just(a)
  }

  get isNothing(): boolean {
    return false
  }

  get isJust(): boolean {
    return false
  }
}

export class Just extends Maybe {
  constructor(
    private readonly _value: unknown,
  ) {
    super()
  }

  get value(): unknown {
    return this._value
  }

  map(fn: Function): Maybe {
    return Maybe.fromNullable(fn(this._value))
  }

  getOrElse(_: unknown): unknown {
    return this._value
  }

  filter(fn: Function): Maybe {
    return Maybe.fromNullable(fn(this._value) ? this._value : null)
  }

  chain(fn: Function): unknown {
    return fn(this._value)
  }

  toString(): string {
    return `Maybe.Just(${this._value})`
  }
}

export class Nothing extends Maybe {
  map(fn: Function): Nothing {
    return this
  }

  get value() {
    throw TypeError("Can't extract the value of a Nothing.")
  }

  getOrElse(other: unknown): unknown {
    return other
  }

  filter(fn: Function): Nothing {
    return this
  }

  chain(fn: Function): Nothing {
    return this
  }

  toString(): string {
    return `Maybe.Nothing`
  }
}
