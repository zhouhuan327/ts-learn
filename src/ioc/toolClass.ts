import { Provider } from "./Provider";
import { Inject } from "./Inject";
@Provider("c")
export class ToolC {}
@Provider("b", [10])
export class ToolB {
  @Inject()
  c: ToolC;
  constructor(private p) {}
}
@Provider("a", [])
export class ToolA {
  @Inject()
  b: ToolB;
}
