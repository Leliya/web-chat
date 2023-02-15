import { Block, registerComponent } from '../../utils/';
import Input from '../../partials/components/input/index';
import { Button } from '../../partials/components/button/button';
import { Field } from '../../partials/components/field/field';
import { ErrorInput } from '../../partials/components/errorInput/errorInput';
import FormLogin from './components/formLogin/formLogin';
import { withRouter } from '../../utils/HOC/withRouter';
import { withStore } from '../../utils/HOC/withStore';
import Store  from '../../utils/Store';
import { RouterInterface } from '../../utils/Router/RouterInterface';

registerComponent(FormLogin);
registerComponent(Field);
registerComponent(Input);
registerComponent(ErrorInput);
registerComponent(Button);

interface LoginProps {
  router: RouterInterface;
  store: Store<AppState>;
  handleGoRegister:()=>void;
}

class Login extends Block<LoginProps> {
  static componentName = 'Login';

  constructor(props:LoginProps) {
    super({...props,
      handleGoRegister:()=>this.props.router.go("/sign-up")
    });
  }

  componentDidUpdate(): boolean {
    return this.props.store.getState().screen !== "login"
  }

  render() {
    console.log(this.props);
    return `
      <main class="main">
        {{{ FormLogin formName="login" title="Вход" buttonName="Войти" link="register" linkName="Создать аккаунт" onGoRegister=handleGoRegister}}}
      </main>
    `;
  }
}

export default withRouter(withStore(Login));
