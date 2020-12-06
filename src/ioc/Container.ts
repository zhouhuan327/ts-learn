import { PROPS_KEY } from "./Inject";
// container.ts
// ioc容器

export default class Container {
  bindMap = new Map();

  // 实例的注册
  bind(identifier: string, clazz: any, constructorArgs: Array<any>) {
    this.bindMap.set(identifier, {
      clazz,
      constructorArgs,
    });
  }

  // 实例的获取
  get<T>(identifier: string): T {
    const target = this.bindMap.get(identifier);
    if (target) {
      const { clazz, constructorArgs } = target;

      const instance = Reflect.construct(clazz, constructorArgs);
      // 这个类中需要注入属性名
      const props = Reflect.getMetadata(PROPS_KEY, clazz);
      for (let prop in props) {
        const identifider = props[prop].value;

        // 注入的类中也可能有inject，所以需要递归
        instance[prop] = this.get(identifider);
      }
      return instance;
    }
    return null;
  }
}
