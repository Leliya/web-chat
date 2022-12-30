import login from '../../data/inputsLogin.json';
import { Block, renderDOM, registerComponent } from '../../utils/';
import Form from '../../partials/components/form/index';
import Input from '../../partials/components/input/index';
import { Button } from '../../partials/components/button/button';
import { Field } from '../../partials/components/field/field';
import { ErrorInput } from '../../partials/components/errorInput/errorInput';

registerComponent(Form);
registerComponent(Field);
registerComponent(Input);
registerComponent(ErrorInput);
registerComponent(Button);

interface LoginProps{
  data:object
}

export class Login extends Block<LoginProps> {
  static componentName = 'Login'
  constructor() {
    super({
      data: login,
    });
  }

  render() {
    return `
      <main class="main">
        {{{ Form formName="login" title="Вход" buttonName="Войти" link="register" linkName="Создать аккаунт" inputs=data}}}
      </main>
    `;
  }
}

//require('babel-core/register');

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Login());
});
