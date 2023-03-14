import PathRouter from '../Router/PathRouter';

export class MockRouter extends PathRouter {
  go(path: string): void {
    window.history.pushState({}, '', path);
  }
}

// export const mockRouter = new MockRouter();

// export const mockPlaySoundFile = jest.fn();
// const mock = jest.fn().mockImplementation(() => {
//   return {router: mockPlaySoundFile};
// });

// export default mock;
