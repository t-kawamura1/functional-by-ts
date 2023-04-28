import {Address, Person} from "../models/person"

export const p1 = new Person(
  'Haskell',
  'Curry',
  '111-11-1111',
)
p1.address = new Address('US')
p1.birthYear = 1900

export const p2 = new Person(
  'Barkley',
  'Rosser',
  '222-22-2222',
)
p2.address = new Address('Greece')
p2.birthYear = 1907

export const p3 = new Person(
  'John',
  'von Neumann',
  '333-33-3333',
)
p3.address = new Address('Hungary')
p3.birthYear = 1903

export const p4 = new Person(
  'Alonzo',
  'Church',
  '444-44-4444',
)
p4.address = new Address('US')
p4.birthYear = 1903

export const p5 = new Person(
  'David',
  'Hilbert',
  '555-55-5555',
)
p5.address = new Address('Germany')
p5.birthYear = 1862

export const p6 = new Person(
  'Alan',
  'Turing',
  '666-66-6666',
)
p6.address = new Address('England')
p6.birthYear = 1912

export const p7 = new Person(
  'Stephen',
  'Kleene',
  '777-77-7777',
)
p7.address = new Address('US')
p7.birthYear = 1909

export const persons = [p1, p2, p3, p4, p5, p6, p7]
