interface Function {
  memoized: Function
  memoize: Function
  _cache: { [key: string]: unknown }
}

Function.prototype.memoized = function(...args: unknown[]) {
  const key = JSON.stringify(args)
  this._cache = this._cache || {}
  this._cache[key] = this._cache[key] || this.apply(this, args)
  return this._cache[key]
}
Function.prototype.memoize = function (...args: unknown[]) {
  const fn = this
  if (fn.length === 0 || fn.length > 1) {
    return fn
  }
  return function () {
    return fn.memoized.apply(fn, arguments)
  }
}
