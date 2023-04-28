import {BehaviorSubject, concatMap, of, timer} from "rxjs";

// const bs = new BehaviorSubject<string>('kome')
// console.log(bs.getValue())

const source = of(1, 2, 3);

timer(3000)
  .pipe(concatMap(() => source))
  .subscribe(console.log);