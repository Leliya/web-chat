import { isArray } from './isArray';
import { isObject } from './isObject';

function merge(lhs?: Indexed, rhs?: Indexed): Indexed {
  if (!lhs) {
    return rhs as Indexed;
  }
if (!rhs) {
    return lhs as Indexed;
  }

  if (Object.keys(rhs).length === 0) {
    return rhs;
  }

  if (isArray(lhs) && !isArray(rhs)) {
    lhs.push(rhs as never);
    return lhs;
  }

  if (isArray(lhs) && isArray(rhs)) {
    return lhs.concat(rhs);
  }

  Object.keys(rhs).forEach((item) => {
    if (isObject(rhs[item])) {
     Object.assign(rhs[item] , merge(lhs[item], rhs[item]))
    }
  });
  Object.assign(lhs || {}, rhs);
  return lhs as Indexed;
}

export default merge;
