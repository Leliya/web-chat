import Block from '../../utils/Block';
import { withRouter } from '../../utils/HOC/withRouter';
import { RouterInterface } from '../../utils/Router/RouterInterface';

interface ErrorPageProps {
  router: RouterInterface;
  statusCode: string;
  message: string;
  handleGoChats: () => void;
}

class ErrorPage extends Block<ErrorPageProps> {
  static componentName = 'ErrorPage';
  constructor(props: ErrorPageProps) {
    super({
      ...props,
      handleGoChats: () => this.props.router.back(),
    });
  }

  protected render(): string {
    return `
    <main class="error">
    <div class="error__box">
      <p class="error__code">{{statusCode}}</p>
      <p class="error__status">{{message}}</p>
      {{{Button class="error-back" type="button" caption="Назад к чатам" onClick=handleGoChats}}}
    </div>
  </main>
  `;
  }
}

export default withRouter(ErrorPage);
