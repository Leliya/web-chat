import { isArray } from './isArray';
import { isObject } from './isObject';

function merge(lhs: Indexed, rhs?: Indexed): Indexed | void {
  if (!rhs) {
    return;
  }
  if (!lhs) {
    return rhs;
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
      merge(lhs[item], rhs[item]);
    }
  });
  Object.assign(lhs || {}, rhs);
  return lhs;
}

export default merge;
