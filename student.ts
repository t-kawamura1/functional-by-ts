// import {curry} from "ramda"

class Address {
  constructor(
    public country: string
  ) {}
}

class Person {

  private _firstName: string
  private _lastName: string
  private _ssn: string
  private _address: Address | null
  private _birthYear: string | null

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

  set birthYear(year: string | null) {
    this._birthYear = year
  }
}

class Student extends Person {

  private _school: string

  constructor(
    firstName: string,
    lastName: string,
    ssn: string,
    school: string,
  ) {
    super(firstName, lastName, ssn)
    this._school = school
  }

  get school() {
    return this._school
  }
}

const Curry = new Student('Haskell', 'Curry', '111-11-1111', 'Penn State')
Curry.address = new Address('US')

const Turing = new Student('Alan', 'Turing', '222-22-2222', 'Princeton')
Curry.address = new Address('England')

const Church = new Student('Alonzo', 'Church', '333-33-3333', 'Princeton')
Curry.address = new Address('US')

const Kleene = new Student('Stephen', 'Kleene', '444-44-4444', 'Princeton')
Curry.address = new Address('US')

function selector(country: string, school: string) {
  return (student: Student) => {
    return student.address?.country === country
        && student.school === school
  }
}

const findStudentsBy = function (friends: Student[], selectorFn) {
  return friends.filter(selectorFn)
}

console.log(
  findStudentsBy(
    [Curry, Turing, Church, Kleene],
    selector('US', 'Princeton')
  )
)

// const find = curry((db: unknown, id: string) => {
//   const obj = db.find(id)
//   if (obj === null) {
//     throw new Error('Object not found')
//   }
//   return obj
// })

// const csv = (student: Student) =>
//   `${student.ssn}, ${student.firstName}, ${student.lastName}`

// const append = curry((selector: string, info: string) => {
//   document.querySelector(selector)!.innerHTML = info
// })

// function showStudent(ssn: string) {
//   let sttudent: Student = db.find(ssn)
//   if (student !== null) {
//     document.querySelector(`#${elementId}`).innerHTML =
//       `
//       ${sttudent.ssn},
//       ${sttudent.firstName},
//       ${sttudent.lastName},
//       `
//   } else {
//     throw new Error('Student not found')
//   }
// }