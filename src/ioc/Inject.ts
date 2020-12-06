import "reflect-metadata";
export const PROPS_KEY = "ioc:inject_props";
// 修饰一个需要依赖注入的属性
export function Inject() {
  return function (target: any, targetKey: string) {
    // target 修饰的属性
    // targetKey 属性名
    // 属性所在的类
    const annotationTarget = target.constructor;
    let props = {};
    if (Reflect.hasOwnMetadata(PROPS_KEY, annotationTarget)) {
      props = Reflect.getMetadata(PROPS_KEY, annotationTarget);
    }
    props[targetKey] = {
      value: targetKey,
    };
    Reflect.defineMetadata(PROPS_KEY, props, annotationTarget);
  };
}
