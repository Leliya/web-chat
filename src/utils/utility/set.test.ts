import set from './set';

describe('Проверка функции добавляющей значение по заданному пути', () => {
  let obj: Indexed | unknown, path: string | undefined, value: unknown, newObj;
  beforeEach(() => {
    obj = { a: 'str', b: 5 };
    path = 'c.e';
    value = { d: 7 };
  });

  it('должна возвращать исходный параметр если он не объект', () => {
    obj = 'str';
    newObj = 'str';
    const result = set(obj, path, value);
    expect(newObj).toStrictEqual(result);
  });
  it('должна добавлять значение в объект при отсутствия указания пути', () => {
    path = undefined;
    const result = set(obj, path, value);
    newObj = { a: 'str', b: 5, d: 7 };
    expect(newObj).toStrictEqual(result);
  });
  it('должна добавлять значение в объект по указанному пути', () => {
    const result = set(obj, path, value);
    newObj = { a: 'str', b: 5, c: { e: { d: 7 } } };
    expect(newObj).toStrictEqual(result);
  });
});
