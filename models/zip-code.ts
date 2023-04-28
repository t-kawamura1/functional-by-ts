export type ZipCodeReturn = {
  code: () => string,
  location: () => string,
  fromString: (str: string) => ZipCodeReturn,
  toString: () => string
}

export const zipCode =
  (code: string, location?: string): ZipCodeReturn => {
  const _code = code
  const _location = location || ''
  return {
    code: () => _code,
    location: () => _location,
    fromString: (str: string) => {
      const parts = str.split('-')
      return zipCode(parts[0], parts[1])
    },
    toString: () => `${_code}-${_location}`
  }
}

const princetonZip = zipCode('08544', '3345')
// console.log(princetonZip.toString())