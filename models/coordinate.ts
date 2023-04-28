const coordinate = (lat: number, long: number) => {
  const _lat = lat
  const _long = long
  return {
    latitude: () => _lat,
    longitude: () => _long,
    translate: (dx: number, dy: number) => coordinate(_lat + dx, _long + dy),
    toString: () => `(${_lat}, ${_long})`
  }
}

const greenwich = coordinate(51.4778, 0.0015)
console.log(greenwich.toString())
console.log(greenwich.translate(10, 10).toString())