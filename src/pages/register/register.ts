import { Block, registerComponent } from '../../utils/';
import Input from '../../partials/components/input/index';
import { Button } from '../../partials/components/button/button';
import { Field } from '../../partials/components/field/field';
import { ErrorInput } from '../../partials/components/errorInput/errorInput';
import FormRegister from './components/formRegister/formRegister';
import { withRouter } from '../../utils/HOC/withRouter';
import { RouterInterface } from '../../utils/Router/RouterInterface';
import { withStore } from '../../utils/HOC/withStore';
import Store from '../../utils/Store';

registerComponent(FormRegister);
registerComponent(Field);
registerComponent(Input);
registerComponent(ErrorInput);
registerComponent(Button);

interface FormRegisterProps {
  store: Store<AppState>;
  router: RouterInterface;
  handleGoLogin: () => void;
}

export class Register extends Block<FormRegisterProps> {
  static componentName = 'Register';

  constructor(props: FormRegisterProps) {
    super({
      ...props,
      handleGoLogin: () => this.props.router.go('/'),
    });
  }

  componentDidUpdate(): boolean {
    return this.props.store.getState().screen === 'register';
  }

  render() {
    return `
      <main class="main">
        {{{ FormRegister formName="register" title="Регистрация" buttonName="Создать аккаунт" link="login" linkName="Войти" onSubmit=onSubmit onGoLogin=handleGoLogin}}}
      </main>
    `;
  }
}

export default withRouter(withStore(Register));
