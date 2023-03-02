import { initApp } from './initApp';
import { RouterInterface } from './Router/RouterInterface';

export function login(router: RouterInterface) {
  function checkUser() {
    if (window.store.getState().user) {
      router.go('/messenger');
    } else {
      setTimeout(() => checkUser(), 200);
    }
  }
  window.store.dispatch(initApp);
  checkUser();
}

export function logout(router: RouterInterface) {
  window.store.set({ user: null }, '');
  router.go('/');
}
