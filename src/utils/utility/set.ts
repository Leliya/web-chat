import merge from './merge';

function set(
  object: Indexed | unknown,
  path?: string,
  value?: unknown
): Indexed | unknown {
  if (!(object instanceof Object)) {
    return object;
  }

  if (!path && value instanceof Object) {
    return merge(object as Indexed, value);
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const newKey: Indexed = path
    .split('.')
    .reduceRight((acc: Indexed, current: string): any => {
      const newObj: Indexed = {};
      if (Object.keys(acc).length === 0) {
        acc[current] = value;
        return acc;
      } else {
        newObj[current] = acc;
        return newObj;
      }
    }, {});

  return merge(object as Indexed, newKey);
}

export default set;
