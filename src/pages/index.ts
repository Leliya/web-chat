import PathRouter from '../utils/Router/PathRouter';
import { RouterInterface } from '../utils/Router/RouterInterface';
import { initRouter } from '../utils/Router/Router';
import Store from '../utils/Store';
import { initApp } from '../utils/initApp';
import { defaultState } from '../utils/defaultState';
import '../styles/style.css';

declare global {
  interface Window {
    store: Store<AppState>;
    router: RouterInterface;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const store = new Store<AppState>(defaultState);
  const router = new PathRouter();

  window.router = router;
  window.store = store;

  initRouter(router, store);
  store.dispatch(initApp);
});
