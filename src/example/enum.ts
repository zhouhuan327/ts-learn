// 默认值从0开始依次累加
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction.Up === 0); // true
console.log(Direction.Down === 1); // true
console.log(Direction.Left === 2); // true
console.log(Direction.Right === 3); // true
console.log('Direction[0]', Direction[0]);
//因此当我们把第一个值赋值后,后面也会根据第一个值进行累加:

// 字符串枚举
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}
console.log('Direction2', Direction2);

// 常亮枚举
const enum Direction3 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

const a = Direction.Up;

// 编译后
// var a = "Up" /* Up */;

//a 已经使用过了枚举类型,之后就没有用了,也没有必要存在与 JavaScript 中了,
//TypeScript 在这一步就把 Direction 去掉了

// 联合枚举类型
enum Animals {
    Cat,
    Dog,
}
let b: Direction;
//可以看成我们声明了一个联合类型 Direction.Up | Direction.Down | Direction.Left | Direction.Right

b = Direction.Up;
// b = Animals.Cat //Error
// 但是b = 100 是可以的
b = 100;
//数组枚举的可以赋值数字，字符串枚举可以赋值字符串
