import {Wrapper} from "./wrapper"

export class Empty {
  private constructor() {}

  static of(): Empty {
    return new Empty()
  }

  map(fn: Function): Empty {
    return this
  }

  fmap(_: unknown): Empty {
    return new Empty()
  }

  toString(): string {
    return `Empty ()`
  }
}

const isEven = (n: number) => Number.isFinite(n) && (n % 2 == 0)
const half = (n: number) => isEven(n) ? Wrapper.of(n / 2) : Empty.of()

console.log(
  half(4),
  half(3)
)