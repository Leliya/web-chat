import renderDOM from '../renderDOM';
import { getScreenComponent, Views } from '../screenList';
import Store from '../Store';
import { RouterInterface } from './RouterInterface';
import routes from './Routes';

export function initRouter(router: RouterInterface, store: Store<AppState>) {
  routes.forEach((route) => {
    router.use(route.path, () => {
      const isAuthorized = Boolean(store.getState().user);

      if (route.path === '*') {
        store.dispatch({ screen: route.block });
        return;
      }

      if (isAuthorized && route.shouldAuthorized) {
        store.dispatch({ screen: route.block });
      }

      if (isAuthorized && !route.shouldAuthorized) {
        store.dispatch({ screen: Views.Chats });
      }

      if (!isAuthorized && !route.shouldAuthorized) {
        store.dispatch({ screen: route.block });
      }

      if (!isAuthorized && route.shouldAuthorized) {
        store.dispatch({ screen: Views.Login });
      }
    });
  });

  store.on('changed', (prevState, nextState) => {
    if (!prevState.appIsInited && nextState.appIsInited) {
      router.start();
    }

    if (prevState.screen !== nextState.screen) {
      const Page = getScreenComponent(nextState.screen);
      renderDOM(new Page({}));
      document.title = `App / ${Page.componentName}`;
    }
  });
}
