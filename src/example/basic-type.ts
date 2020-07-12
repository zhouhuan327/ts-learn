//! 八个原始类型：
// boolean,number,string,null,undefined,Symbol,bigint,void
// !顶级类型
// any,unknow
// !底部类型
// never
// !object
// 数组，元祖，枚举等等

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

//void类型
const consoleText = (text: string): void => {
    console.log(text);
};
let v: void;
//非严格模式
v = undefined;
v = null;

// null和undefined
//!既是值也是类型
//!是其他类型的子类型
let u: undefined = undefined;
let n: null = null;
num = undefined; //非严格模式
num = null; //非严格模式

//any类型
let value: any;
value = 123;
value = '123';
value = false;
const arr4: any[] = [1, 'a'];

//unknow类型
// unknown 与 any 的不同之处,虽然它们都可以是任何类型,
//!但是当 unknown 类型被确定是某个类型之前,它不能被进行任何操作比如实例化、getter、函数执行等等
function getValue(value: unknown): string {
    if (value instanceof Date) {
        // 这里由于把value的类型缩小为Date实例的范围内,所以`value.toISOString()`
        return value.toISOString();
    }
    //value.toISOString() Error
}

//never类型
// 表示永不存在的值的类型
//!没有类型是 never 的子类型或可以赋值给 never 类型（除了never本身之外）
const errorFunc = (message: string): never => {
    // 抛出异常的函数永远不会有返回值
    throw new Error(message);
};
const infiniteFunc = (): never => {
    while (true) {}
};
