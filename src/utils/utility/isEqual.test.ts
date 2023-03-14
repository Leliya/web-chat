import isEqual from './isEqual';

describe('Проверка функции эквивалентности', () => {
  let lhs: Indexed, rhsEqual: Indexed, rhsNoEqual: Indexed;

  beforeEach(() => {
    lhs = {
      a: 'string',
      b: 2,
      c: ['string', 9],
      d: {
        e: 'string',
      },
    };
    rhsEqual = {
      a: 'string',
      b: 2,
      c: ['string', 9],
      d: {
        e: 'string',
      },
    };
    rhsNoEqual = {
      a: 'string',
      b: 2,
      c: ['string', 9, 0],
      d: {
        e: 'string',
      },
    };
  });

  it('должна возвращать true для двух эквивалентных объектов', () => {
    const result = isEqual(lhs, rhsEqual);
    expect(true).toBe(result);
  });
  it('должна возвращать false для двух неэквивалентных объектов', () => {
    const result = isEqual(lhs, rhsNoEqual);
    expect(false).toBe(result);
  });
});
