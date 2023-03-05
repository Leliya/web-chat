import cloneDeep, { deepCLoneArray, deepCLoneObject } from './cloneDeep';
describe('Проверка функции глубокого копирования', () => {
  const obj = {
    a: 'string',
    b: 2,
    c: ['string', 9],
    d: {
      e: 'string',
    },
  };
  const arr = [0, 'str', { str: 0 }];

  it('должна возвращать объект, эквивалентный, но не равный исходному', () => {
    const result = cloneDeep(obj);
    const equality = obj === result;

    expect(false).toBe(equality);
    expect(obj).toStrictEqual(result);
  });

  it('должна возвращать переданный примитив', () => {
    const str = 'string';
    const result = cloneDeep(str);

    expect(str).toEqual(result);
  });

  describe('Проверка функции глубокого копирования массива', () => {

    it('должна возвращать массив, эквивалентный, но не равный исходному', () => {
      const result = deepCLoneArray(arr);
      const equality = arr === result;

      expect(false).toBe(equality);
      expect(arr).toStrictEqual(result);
    });
  });

  describe('Проверка функции глубокого копирования объекта', () => {
    it('должна возвращать массив, эквивалентный, но не равный исходному', () => {
      const result = deepCLoneObject(obj);
      const equality = obj === result;
      expect(false).toBe(equality);
      expect(obj).toStrictEqual(result);
    });
  });
});
