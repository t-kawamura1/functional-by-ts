import {Church, Curry, Kleene, Student, Turing} from "../models/student"

function selector(country: string, school: string) {
  return (student: Student) => {
    return student.address?.country === country
        && student.school === school
  }
}

const findStudentsBy =
  (friends: Student[], selectorF: typeof selector): Student[] => {
    return friends.filter(selectorF('US', 'Princeton'))
  }

console.log(
  findStudentsBy(
    [Curry, Turing, Church, Kleene],
    selector
  )
)