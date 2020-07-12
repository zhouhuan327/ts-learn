//装饰器工厂
function setName() {
  console.log('get SetName')
  return (target) => {
    console.log('setName')
  }
}
function setAge() {
  console.log('get setAge')
  return (target) => {
    console.log('setAge')
  }
}
@setName()
@setAge()
class ClassDec {}

//类装饰器
//target 被装饰类的构造函数
function sealed(target: Function) {
  console.log(target)
  Object.seal(target)
  Object.seal(target.prototype)
}
@sealed
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return 'Hello, ' + this.greeting
  }
}
//如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = 'new property'
    hello = 'override'
  }
}

@classDecorator
class Greeter2 {
  property = 'property'
  hello: string
  constructor(m: string) {
    this.hello = m
  }
}
console.log(new Greeter2('world'))

console.log('----方法装饰器-----')
//方法装饰器
//target 对于静态成员来说是类的构造函数，
//对于实例成员来说，是类的原型对象
//propertyKey 成员的名字
//descriptor 成员的 属性描述符
function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('target:', target)
    console.log('propertyKey:', propertyKey)
    console.log('descriptor:', descriptor)
    descriptor.enumerable = value
  }
}

class Greeter3 {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  @enumerable(true)
  greet() {
    return 'Hello' + this.greeting
  }
}
