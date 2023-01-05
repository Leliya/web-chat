import { Block, renderDOM, registerComponent } from '../../utils/';
import Input from '../../partials/components/input/index';
import { Button } from '../../partials/components/button/button';
import { Field } from '../../partials/components/field/field';
import { ErrorInput } from '../../partials/components/errorInput/errorInput';
import { FormLogin } from './components/formLogin/formLogin';

registerComponent(FormLogin);
registerComponent(Field);
registerComponent(Input);
registerComponent(ErrorInput);
registerComponent(Button);

export class Login extends Block<object> {
  static componentName = 'Login'
  constructor() {
    super({});
  }

  render() {
    return `
      <main class="main">
        {{{ FormLogin formName="login" title="Вход" buttonName="Войти" link="register" linkName="Создать аккаунт" }}}
      </main>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Login());
});
