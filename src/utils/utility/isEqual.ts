type PlainObject<T = unknown> = {
  [k in string]: T;
};

function isObject(value: unknown): value is PlainObject {
  return typeof value === 'object' && value instanceof Object && value !== null;
}
function isArray(arr: unknown): arr is [] {
  return Array.isArray(arr);
}
function isEqual(a: Indexed, b: Indexed): boolean {
  if (!(isObject(a) && isObject(b))) {
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
