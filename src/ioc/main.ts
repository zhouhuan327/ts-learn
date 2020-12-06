import Container from "./Container";
import { load } from "./load";
// b.ts

// a.ts
// export class ToolA {
//   b: ToolB;
//   constructor() {
//     this.b = container.get("b");
//   }
// }
const container = new Container();
load(container);

// 从容器中取出a
const a = container.get("a");
console.log(a); // A => { b: B { p: 10 } }
