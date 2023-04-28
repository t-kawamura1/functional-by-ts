const isObject = (v: unknown): v is {[key: string]: unknown} => {
  return !!v && typeof v === 'object'
}

const deepFreeze = (obj: unknown) => {
  if (isObject(obj) && !Object.isFrozen(obj)) {
    Object.keys(obj).forEach((name) => deepFreeze(obj[name]))
    Object.freeze(obj)
  }
  return obj
}
