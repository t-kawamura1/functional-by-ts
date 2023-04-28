import {mergeMap, interval, of, map, merge, mergeAll} from "rxjs";

const letters = of('a', 'b', 'c')
const numbers = of(1, 2, 3)
letters.pipe(
    mergeMap(x => {
      return numbers.pipe(map(n => {
        console.log(n)
        console.log(x)
        return x + n
      }))
    })
)
// .subscribe(v => console.log(v))

merge(letters, numbers)
  // .subscribe(v => console.log(v))

const myPromise = (val: number) =>
  new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));
//emit 1,2,3
const source = of(1, 2, 3);

const example = source.pipe(
  //map each value to promise
  map(val => myPromise(val)),
  //emit result from source
  // mergeAll()
);

/*
  output:
  "Result: 1"
  "Result: 2"
  "Result: 3"
*/
// const subscribe = example.subscribe(val => console.log(val));
