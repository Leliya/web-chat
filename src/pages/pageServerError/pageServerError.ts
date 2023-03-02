import { Button } from '../../partials/components/button/button';
import ErrorPage from '../../partials/errorPage';
import { Block, registerComponent } from '../../utils/';

registerComponent(ErrorPage);
registerComponent(Button);

export class PageServerError extends Block<object> {
  static componentName = 'PageServerError';
  protected render(): string {
    return `
    {{{ErrorPage statusCode="500" message="Мы уже фиксим"}}}
  `;
  }
}
