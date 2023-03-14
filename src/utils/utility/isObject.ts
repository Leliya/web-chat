export type PlainObject<T = unknown> = {
  [k in string]: T;
};

export function isObject(value: unknown): value is PlainObject {
  return typeof value === 'object' && value instanceof Object && value !== null&& !(value instanceof Map)&&!(value instanceof Set);
}
