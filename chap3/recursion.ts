import _ from "lodash"
import {Person} from "../models/person"
import {isValid} from "./gather-stats"

function sum(arr: number[]): number {
  if (_.isEmpty(arr)) {
    return 0
  }
  return _.first(arr)! + sum(_.tail(arr))
}

function sumTCO(arr: number[], acc = 0): number {
  if (_.isEmpty(arr)) {
    return 0
  }
  return sumTCO(_.tail(arr), acc + _.first(arr)!)
}

console.log(
  sum([]),
  sumTCO([1,2,3,4,5,6,7,8,9])
)

class Node {
  private _val: Person
  private _parent: Node | null
  private _children: Node[]
  constructor(val: Person) {
    this._val = val
    this._parent = null
    this._children = []
  }

  isRoot() {
    return isValid(this._parent)
  }
  get children() {
    return this._children
  }
  hasChildren() {
    return this._children.length > 0
  }
  get value() {
    return this._val
  }
  set value(val) {
    this._val = val
  }
  append(child: Node) {
    child._parent = this
    this._children.push(child)
    return this
  }
  toString() {
    return `Node (val: ${this._val}, children: ${this._children.length})`
  }
}

const church = new Node(new Person('Alonzo', 'Church', '111-11-1111'))

class Tree {
  private _root: Node
  constructor(root: Node) {
    this._root = root
  }
  static map(node: Node, fn: Function, tree: Tree | null = null) {
    node.value = fn(node.value)
    if (tree === null) {
      tree = new Tree(node)
    }
    if (node.hasChildren()) {
      _.map(node.children, (child) => {
        Tree.map(child, fn, tree)
      })
    }
    return tree
  }

  get root() {
    return this._root
  }
}
