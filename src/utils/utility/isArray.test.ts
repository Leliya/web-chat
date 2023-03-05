import { isArray } from './isArray';

describe('Проверка функции определяющей массив', () => {
  const arr = ['str', 5];
  const obj = { a: 'str', b: 5 };

  it('должна возвращать true для массивов', () => {
    const result = isArray(arr);
    expect(true).toBe(result);
  });
  it('должна возвращать false для объектов', () => {
    const result = isArray(obj);
    expect(false).toBe(result);
  });
});
