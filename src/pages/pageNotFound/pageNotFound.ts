import { Button } from '../../partials/components/button/button';
import ErrorPage from '../../partials/errorPage';
import { Block, registerComponent } from '../../utils/';

registerComponent(ErrorPage);
registerComponent(Button);

export class PageNotFound extends Block<object> {
  static componentName = 'PageNotFound';

  protected render(): string {
    return `
    {{{ErrorPage statusCode="404" message="Не туда попали"}}}
  `;
  }
}
