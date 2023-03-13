import { MockRouter } from '../testsSetup/mockRouter';
import { RouterInterface } from './../Router/RouterInterface';

describe('Проверка работы роутера', () => {
  let mockRouter: RouterInterface;
  window.history.pushState = jest.fn();
  window.history.forward = jest.fn();
  window.history.back = jest.fn();

  beforeEach(() => {
    mockRouter = new MockRouter();
  });

  it('должен добавлять новый роут', () => {
    const mock = jest.fn();

    mockRouter.use('/path', mock);
    expect(Object.keys(mockRouter.routes).length).toBe(1);

    mockRouter.use('/path2', mock);
    expect(Object.keys(mockRouter.routes).length).toBe(2);
  });

  it('должен вызывать добавление нового объекта в history', () => {
    mockRouter.go('test');
    expect(window.history.pushState).toHaveBeenCalledTimes(1);
  });

  it('должен вызывать метод forward history', () => {
    mockRouter.forward();
    expect(window.history.forward).toHaveBeenCalledTimes(1);
  });

  it('должен вызывать метод back history', () => {
    mockRouter.back();
    expect(window.history.back).toHaveBeenCalledTimes(1);
  });
});
