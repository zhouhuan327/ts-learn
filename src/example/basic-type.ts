//布尔类型
let bool: boolean = false;

//数值
let num: number = 123;
num = 0b1110111;
num = 0o173;
num = 0x7b;

//字符串类型
let str: string = 'abc';
str = `num is ${num}`;
console.log(str);

//数组
let arr: number[];
arr = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
let arr3: (string | number)[] = [1, 2, 3, '4'];

//元祖类型
let tuple: [string, number, boolean];
tuple = ['1', 2, false];

//枚举类型
enum Roles {
    SUPTER_ADMIN,
    ADMIN,
    USER,
}
// if(roles === Roles.SUPTER_ADMIN){
//     ...
// }
console.log(Roles);

//any类型
let value: any;
value = 123;
value = '123';
value = false;
const arr4: any[] = [1, 'a'];

//void类型
const consoleText = (text: string): void => {
    console.log(text);
};
let v: void;
v = undefined;
v = null; //非严格模式

// null和undefined
//既是值也是类型
//是其他类型的子类型
let u: undefined = undefined;
let n: null = null;
num = undefined; //非严格模式
num = null; //非严格模式

//never类型
const errorFunc = (message: string): never => {
    throw new Error(message);
};
const infiniteFunc = (): never => {
    while (true) {}
};
// let neverVariable = (() => {
//   while (true) {}
// })()
// num = neverVariable

//obj
function consoleObject(obj: object): void {
    console.log(obj);
}
consoleObject({ test: 'dd' });

//类型断言
//
const getLenght = (target: string | number) => {
    if ((<string>target).length || (target as string).length === 0) {
        return (target as string).length;
    }
    return target.toString().length;
};
console.log(getLenght(123), getLenght('2'));
let s = Symbol();
