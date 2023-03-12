import { RouterInterface } from './RouterInterface';

class PathRouter implements RouterInterface {
  public routes: Record<string, () => void> = {};

  private isStarted = false;

  start(): void {
    if (!this.isStarted) {
      this.isStarted = true;

      window.onpopstate = () => {
        this.onRouteChange.call(this);
      };

      this.onRouteChange();
    }
  }

  private onRouteChange(pathname: string = window.location.pathname) {
    const found = Object.entries(this.routes).some(([routePath, callback]) => {
      if (routePath === pathname) {
        callback();
        return true;
      }
      return false;
    });

    if (!found && this.routes['*']) {
      this.routes['*']();
    }
  }

  use(path: string, callback: () => void) {
    this.routes[path] = callback;
    return this;
  }

  go(path: string): void {
    window.history.pushState({}, '', path);
    this.onRouteChange(path);
  }

  forward(): void {
    window.history.forward();
  }

  back(): void {
    window.history.back();
  }
}

export default PathRouter;
