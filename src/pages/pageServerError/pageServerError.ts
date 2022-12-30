import ErrorPage from '../../partials/errorPage';
import { Block, renderDOM, registerComponent } from '../../utils/';

registerComponent(ErrorPage);

export class PageServerError extends Block<object> {
  static componentName = 'PageServerError'
  protected render(): string {
    return `
    {{{ErrorPage statusCode="500" message="Мы уже фиксим"}}}
  `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new PageServerError({}));
});
