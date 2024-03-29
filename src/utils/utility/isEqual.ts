import { isArray } from "./isArray";
import { isObject, PlainObject } from "./isObject";


function isEqual(a: Indexed|Indexed[], b: Indexed|Indexed[]): boolean {
  if (!(isObject (a) && isObject(b))) {
    return false;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (const [key, value] of Object.entries(a)) {
    if (
      isObject(b[key]) ||
      (isArray(b[key]) && isObject(value)) ||
      isArray(value)
    ) {
      if (isEqual(value as PlainObject, b[key] as PlainObject)) {
        continue;
      }
      return false;
    }
    if (value !== b[key]) {
      return false;
    }
  }
  return true;
}
export default isEqual;
