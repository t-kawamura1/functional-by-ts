import R from "ramda"
import {zipCode, ZipCodeReturn} from "./zip-code"

export class Address {
  constructor(
    public readonly country: string,
    // public readonly state: string,
    // public readonly city: string,
    // public readonly zip: ZipCodeReturn,
    // public readonly street: string,
  ) {}
}

export class Person {
  private _firstName: string
  private _lastName: string
  private _ssn: string
  private _address: Address | null
  private _birthYear: number | null

  constructor(
    firstName: string,
    lastName: string,
    ssn: string
  ) {
    this._firstName = firstName
    this._lastName = lastName
    this._ssn = ssn
    this._address = null
    this._birthYear = null
  }

  get ssn() {
    return this._ssn
  }

  get firstName() {
    return this._firstName
  }

  get lastName() {
    return this._lastName
  }

  get address() {
    return this._address
  }

  get birthYear() {
    return this._birthYear
  }

  set address(addr: Address | null) {
    this._address = addr
  }

  set birthYear(year: number | null) {
    this._birthYear = year
  }

  fullname() {
    return `${this._firstName} ${this._lastName}`
  }
}

// const person = new Person('Haskell', 'Curry', '444-44-4444')
// const lastNameLens = R.lensProp<Person, 'lastName'>('lastName')

// person.address = new Address(
//   'US',
//   'NJ',
//   'Princeton',
//   zipCode('08544', '1234'),
//   'Alexander St.'
// )
// const zipPath = ['address', 'zip']
// const zipLens = R.lens(R.path(zipPath), R.assocPath(zipPath))

// const newPerson = R.set(zipLens, zipCode('90210', '5678'), person)
// const newZip = R.view(zipLens, newPerson) as ZipCodeReturn
// console.log(newZip.toString())



