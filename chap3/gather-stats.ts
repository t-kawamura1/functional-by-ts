import _ from "lodash"
import {persons} from "./students-data"

export const isValid = (v: unknown) => !_.isUndefined(v) && !_.isNull(v)

type Stat = {
  [key: string]: {
    name: string,
    count: number,
  }
}

export const gatherStats = function (stat: Stat, country: string) {
  if (!isValid(stat[country])) {
    stat[country] = {name: country, count: 0}
  }
  stat[country].count++
  return stat
}

// _.mixin<string>({
//   'select': _.map,
//   'from': _.chain,
//   'where': _.filter,
//   'sortBy': _.sortBy
// })

console.log(
)