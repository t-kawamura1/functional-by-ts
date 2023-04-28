function curry2(fn: Function) {
  return function (firstArg: unknown) {
    return function (secondArg: unknown) {
      return fn(firstArg, secondArg)
    }
  }
}
