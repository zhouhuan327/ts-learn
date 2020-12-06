const identity = <T>(arg: T): T => {
  return arg
}

const getArray = <T, E>(
  parpama1: T,
  parama2: E,
  times: number
): Array<[T, E]> => {
  return new Array(times).fill([parpama1, parama2])
}
console.log(getArray(1, 'a', 3))


//泛型接口
interface ReturnItem<T> {
  (parama: T) : T,
}
const returnParama: ReturnItem<string> = parama => parama
console.log(returnParama('parama'))

interface ValueWithLength {
  length: number
}

//泛型约束
const constrain = <T extends ValueWithLength>(arg: T) => {
  console.log(arg.length)
}
constrain([1, 2])
constrain({ length: 1, value: 'dfdf' })

type Parama = number | string

class Stack<T extends Parama>{
  private arr: Array<T> = []
  constructor(init: Array<T>){
    this.arr = init
  }
  public push(item: T){
    this.arr.push(item)
  }
  public pop(){
    this.arr.pop()
  }
}
const stack = new Stack([1,'ddd']);


// 索引类型
const getProp = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key]
}
const obj = {
  a: 'a',
  b: 'b',
}
getProp(obj, 'a')
// getProp(obj,'e') 类型“"e"”的参数不能赋给类型“"a" | "b"”的参数

interface FirstInterface {
  doSomething(): number
}

interface SecondInterface {
  doSomethingElse(): string
}
class Demo<T extends FirstInterface & SecondInterface> {
  private genericProperty: T

  useT() {
    this.genericProperty.doSomething() // ok
    this.genericProperty.doSomethingElse() // ok
  }
}

// 泛型与 new

function factory<T>(type :{ new():T }){
  return new type();
}