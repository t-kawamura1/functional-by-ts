import {Address, Person} from "./person"

export class Student extends Person {
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

export const Curry = new Student('Haskell', 'Curry', '111-11-1111', 'Penn State')
Curry.address = new Address('US')

export const Turing = new Student('Alan', 'Turing', '222-22-2222', 'Princeton')
Turing.address = new Address('England')

export const Church = new Student('Alonzo', 'Church', '333-33-3333', 'Princeton')
Church.address = new Address('US')

export const Kleene = new Student('Stephen', 'Kleene', '444-44-4444', 'Princeton')
Kleene.address = new Address('US')
