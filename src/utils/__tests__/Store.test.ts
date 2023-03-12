import Store, { Dispatch } from '../Store';

describe('Проверка работы Store', () => {
  const store = new Store({ testProps: 'test' });

  it('должен возвращать актуальное состояние', () => {
    const result = store.getState();
    expect(result).toEqual({ testProps: 'test' });
  });

  it('метод dispatch должен вызывать метод set для объекта', () => {
    store.set = jest.fn();
    store.dispatch({ testProps: 'newTest' });
    expect(store.set).toHaveBeenCalledTimes(1);
  });

  it('метод dispatch должен вызывать метод set для объекта', () => {
    store.set = jest.fn();
    function testDispatch(dispatch: Dispatch<Indexed>) {
      dispatch({ testProps: 'newTest2' });
    }
    store.dispatch(testDispatch);
    expect(store.set).toHaveBeenCalledTimes(1);
  });

  it.only('должен изменять состояние', () => {
    store.set({ testProps: 'newTest3' }, '');
    const result = store.getState();
    expect(result).toEqual({ testProps: 'newTest3' });

    store.set({ testProps: 'newTest3' }, 'testProps2');
    expect(result).toEqual({
      testProps: 'newTest3',
      testProps2: { testProps: 'newTest3' },
    });
  });
});
