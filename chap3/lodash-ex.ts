import _ from "lodash"
import R from "ramda"
import {Person} from "../models/person"
import {p1, p2, p3, p4, persons} from "./students-data"

  _(persons)
    .reverse()
    .map(
      p => p != null ? p.fullname() : ''
  )
  .value()

type Stat = {[k: string]: number}

  _(persons)
    .reduce((stat: Stat, person: Person) => {
      const country = person.address!.country
      stat[country] = _.isUndefined(stat[country])
        ? 1
        : stat[country] + 1
      return stat
    }, {})

const getCountry = (person: Person) => person.address!.country

const gatherStats = function (stat: Stat, criteria: string) {
  stat[criteria] = _.isUndefined(stat[criteria])
    ? 1
    : stat[criteria] + 1
  return stat
}

_(persons).map(getCountry).reduce(gatherStats, {})

const cityPath = ['address', 'city']
const cityLens = R.lensPath(cityPath);

  _(persons).map(R.view(cityLens)).reduce(gatherStats, {})

const isNotValid = (v: unknown) => _.isUndefined(v) || _.isNull(v);
const notAllValid = (args: unknown[]) => _(args).some(isNotValid);
const isValid = (v: unknown) => !_.isUndefined(v) && !_.isNull(v)
const allValid = (args: unknown[]) => _(args).every(isValid)

const names = [
  'alonzo church',
  'Haskell curry',
  'stephen_kleene',
  'John von Neumann',
  'stephen_kleene'
]

console.log(
  _.chain(names)
    .filter(isValid)
    .map(s => s.replace(/_/, ' '))
    .uniq()
    .map(_.startCase)
    .sort()
    .value()
)
