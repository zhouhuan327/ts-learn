interface NameInfo {
  firstName: string
  lastName: string
  age?: number
  fn?: (parama: string) => string
  [prop: string]: any
}

const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`
}
console.log(
  getFullName({
    firstName: 'haha',
    lastName: 'df',
  })
)
//绕过多余属性检查
//使用类型断言
// getFullName({
//   firstName: 'f',
//   lastName: 'l',
//   more: '1',
// } as NameInfo)
//使用索引签名
getFullName({
  firstName: 'f',
  lastName: 'l',
  more: '1',
})

//readonly声明只读属性
interface Vegetable {
  color?: string
  readonly type: string
}

let tomato: Vegetable = {
  type: 'tomato',
}
// tomato.type = '1'

//接口定义函数结构
interface AddFunc {
  (num1: number, num2: number): number
}

const typeFunc: AddFunc = (n1,n2) => {
  return n1+ n2
}


//定义索引类型
interface RoleDic {
  [id: number]: string
  [info: string]: string
}
const role: RoleDic = {
  a: '123',
  info: 'info',
  1:'ddd'
}
console.log(role)

//接口的继承
interface Animal {
  type: string
}
interface Dog extends Animal {
  color: string
}
const dog: Dog = {
  type: 'hashiqi',
  color: 'white',
}

//混合类型接口
interface Counter {
  (): void
  count: number
}
const getCounter = (): Counter => {
  const c = () => {
    c.count++
  }
  c.count = 0
  return c
}

const counter: Counter = getCounter()
counter()
counter()
console.log(counter.count)
