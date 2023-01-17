import ErrorPage from '../../partials/errorPage';
import { Block, renderDOM, registerComponent } from '../../utils/';

registerComponent(ErrorPage);

export class PageNotFound extends Block<object> {
  static componentName = 'PageNotFound';

  protected render(): string {
    return `
    {{{ErrorPage statusCode="404" message="Не туда попали"}}}
  `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new PageNotFound({}));
});
