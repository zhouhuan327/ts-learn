//交叉类型

function extend<T, U>(first: T, second: U) {
  let result = <T & U>{}
  for (let id in first) {
    ;(<any>result)[id] = (<any>first)[id]
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      ;(<any>result)[id] = (<any>second)[id]
    }
  }
  return result
}
class Person {
  constructor(public name: string) {}
}
interface Loggable {
  log(): void
}
class ConsoleLogger implements Loggable {
  log() {
    console.log('name')
  }
}
var zh = extend(new Person('zh'), new ConsoleLogger())
zh.log()

//联合类型
interface Bird {
  fly()
  layEggs()
}
interface Fish {
  swim()
  layEggs()
}

function getSmallPet(): Fish | Bird {
  const bird: Bird = {
    fly: function () {},
    layEggs: function () {},
  }
  return bird
}
let pet = getSmallPet()
// pet.fly()
if ((<Fish>pet).swim) {
  ;(<Fish>pet).swim()
} else {
  ;(<Bird>pet).fly()
}
function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}

type Alias = { num: number }
interface Interface {
  num: number
}
declare function aliased(arg: Alias): Alias
declare function interfaced(arg: Interface): Interface
