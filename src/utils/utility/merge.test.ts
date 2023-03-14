import merge from "./merge";

describe('Проверка функции слияния', () => {
let lhs, rhs

  it('должна возвращать исходный объект при отсутствии донора', () => {
    lhs={a:1, b:2}
    const result = merge(lhs);
    expect(lhs).toStrictEqual(result);
  });
  it('должна возвращать объект-донор при отсутствии исходного объекта', () => {
    rhs={a:1, b:2}
    lhs = undefined
    const result = merge(lhs, rhs);
    expect(rhs).toStrictEqual(result);
  });
  it('должна возвращать объект, объединенный из двух входящих', () => {
    lhs={a:1, b:{c:2, e:5, f:6}}
    rhs={a:1, b:{c:3, d:4}, g:[1,2]}
    const obj = {a:1, b:{c:3, d:4, e:5, f:6}, g:[1,2]}

    const result =  merge(lhs, rhs);
    expect(obj).toStrictEqual(result);
  });
  it('должна возвращать исходный объект при отсутствии объекта-донора', () => {
    rhs={}
    lhs = {a:1, b:{c:3, d:4}, g:[1,2]}
    const result = merge(lhs, rhs);
    expect(rhs).toStrictEqual(result);
  });
});
