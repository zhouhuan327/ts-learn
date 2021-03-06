// provider.ts
// 给装饰的类加上 标识
import "reflect-metadata";

export const CLASS_KEY = "ioc:tagged_class";

export function Provider(identifier: string, args?: Array<any>) {
  return function (target: any) {
    Reflect.defineMetadata(
      CLASS_KEY,
      {
        id: identifier,
        args: args || [],
      },
      target
    );
    return target;
  };
}
