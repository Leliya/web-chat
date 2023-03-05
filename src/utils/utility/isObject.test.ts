import { isObject } from './isObject';

describe('Проверка функции определяющей объект', () => {
  const obj = {
    a: 'str',
    b: 0,
  };

  const map = new Map();
  map.set(true, 'bool1');

  const set = new Set();

  it('должна возвращать true для объектов', () => {
    const result = isObject(obj);
    expect(true).toBe(result);
  });
  it('должна возвращать false для null', () => {
    const result = isObject(null);
    expect(false).toBe(result);
  });
  it('должна возвращать false для Map', () => {
    const result = isObject(map);
    expect(false).toBe(result);
  });
  it('должна возвращать false для Set', () => {
    const result = isObject(set);
    expect(false).toBe(result);
  });
});
