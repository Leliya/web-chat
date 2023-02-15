import { isArray } from "./isArray";
import { isObject } from "./isObject";


function deepCLoneArray<T extends []>(arr: T): T {
  const newObj = [] as T
  if(isArray(arr))
  for (const item of arr) {
      if (isArray(item) || isObject (item)) {
          newObj.push(cloneDeep(item ))
          continue
      }
      newObj.push(item)
  }
  return newObj
}

function deepCLoneObject<T extends Indexed>(obj: T): T {
  const newObj = {} as Indexed;
  Object.keys(obj).forEach((key:string) => {
    newObj[key] = cloneDeep(obj[key])
  })
  return newObj as T
}


function cloneDeep<T>(obj: T):T{
  if (isArray(obj)) {
      return deepCLoneArray(obj)
  } else if (isObject(obj) && !isArray(obj)) {
      return deepCLoneObject(obj)
  }
  return obj
}

export default cloneDeep;
