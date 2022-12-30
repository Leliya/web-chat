import ErrorPage  from '../../partials/ErrorPage';
import { Block, renderDOM, registerComponent } from '../../utils/';

// import './form.css';
registerComponent(ErrorPage);


export class PageNotFound extends Block<object> {
  static componentName = 'PageNotFound'

  protected render(): string {
    return `
    {{{ErrorPage statusCode="404" message="Не туда попали"}}}
  `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new PageNotFound({}));
});
