class Point {
  public x: number
  public y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  public getX() {
    return this.x
  }
}
const p = new Point(1, 2)
console.log(p)

class Parent {
  public name: string
  private age: number
  //protected 父类就不能创建实例
  protected constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  protected getAge() {
    console.log(this.age)
  }
}
class Child extends Parent {
  constructor(name: string, age: number) {
    super(name, age)
    super.getAge()
  }
}
const child = new Child('dd', 18)

class User {
  public readonly name: string
  constructor(name) {
    this.name = name
  }
}
const user = new User('zh')
// user.name = 3

//参数属性
class A {
  constructor(public name: string) {
    this.name = name
  }
}

//可选属性,get set
class Info {
  public name: string
  public age?: number
  private info?: string
  constructor(name: string, age?: number, public sex?: string) {
    this.name = name
    this.age = age
  }
  get infoStr() {
    return `${this.name}-${this.age}-${this.info}`
  }
  set infoStr(info) {
    this.info = info
  }
}
const info = new Info('info', 10, 'male')
info.infoStr = '3'
console.log(info.infoStr)

abstract class People {
  constructor(public name: string) {}
  abstract printName(): void
}
class Man extends People {
  constructor(name: string) {
    super(name)
    this.name = name
  }
  printName() {
    console.log(this.name)
  }
}
new Man('man').printName()
