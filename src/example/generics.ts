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

interface ValueWithLength {
  length: number
}

//泛型约束
const constrain = <T extends ValueWithLength>(arg: T) => {
  console.log(arg.length)
}
constrain([1, 2])
constrain({ length: 1, value: 'dfdf' })

const getProp = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key]
}
const obj = {
  a: 'a',
  b: 'b',
}
getProp(obj, 'a')
