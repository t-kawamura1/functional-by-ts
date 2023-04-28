type Optional<T> = {
  map<U>(f: (value: T) => None): None
  map<U>(f: (value: T) => Optional<U>): Optional<U>
  getOrElse(value: T): T
}

class Some<T> implements Optional<T> {
  constructor(private value: T) {}

  map<U>(f: (value: T) => None): None
  map<U>(f: (value: T) => Optional<U>): Optional<U>
  map<U>(f: (value: T) => Optional<U>): Optional<U> {
    return f(this.value)
  }

  getOrElse(): T {
    return this.value
  }
}

class None implements Optional<never> {
  map(): None {
    return this
  }

  getOrElse<U>(value: U): U {
    return value
  }
}

function Optional<T>(value: null | undefined): None
function Optional<T>(value: T): Some<T>
function Optional<T>(value: T): Optional<T> {
  return value == null
    ? new None
    : new Some(value)
}

let result = Optional(6)
  .map(n => Optional(n * 3))
  .map(n => new None)
  .getOrElse(7)
console.log(7);
