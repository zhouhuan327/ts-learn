import * as fs from "fs";
import { CLASS_KEY } from "./Provider";

export function load(container) {
  const list = fs.readdirSync("./src/ioc");
  for (const file of list) {
    if (/\.ts$/.test(file)) {
      const exports = require(`./${file}`);
      for (const m in exports) {
        const module = exports[m];
        if (typeof module === "function") {
          const metadata = Reflect.getMetadata(CLASS_KEY, module);
          if (metadata) {
            container.bind(metadata.id, module, metadata.args);
          }
        }
      }
    }
  }
}
