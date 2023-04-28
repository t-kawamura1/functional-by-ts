import _ from "lodash";

export class IO {
  constructor(public readonly effect: Function) {
    if (!_.isFunction(effect)) {
      throw 'IO Usage: function required'
    }
  }

  static of(a: unknown): IO {
    return new IO(() => a)
  }
  static from(fn: Function): IO {
    return new IO(fn)
  }

  map(fn: Function): IO {
    const self = this
    return new IO(() => fn(self.effect()))
  }

  chain(fn: Function): unknown {
    return fn(this.effect())
  }

  run(): unknown {
    return this.effect()
  }
}

const read = (document: Document, selector: string) => {
  return () => document.querySelector(selector)?.innerHTML
};

const write = (document: Document, selector: string) => {
  return (v: string) => {
    document.querySelector(selector)!.innerHTML = v
    return v
  }
}

const readDom = _.partial(read, document)
const writeDom = _.partial(write, document)

const changeToStartCase =
  IO.from(readDom('#student-name'))
  .map(_.startCase)
  .map(writeDom('#student-name'))