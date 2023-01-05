import { Block, renderDOM, registerComponent } from '../../utils/';
import Input from '../../partials/components/input/index';
import { Button } from '../../partials/components/button/button';
import { Field } from '../../partials/components/field/field';
import { ErrorInput } from '../../partials/components/errorInput/errorInput';
import { FormRegister } from './components/formRegister/formRegister';

registerComponent(FormRegister);
registerComponent(Field);
registerComponent(Input);
registerComponent(ErrorInput);
registerComponent(Button);

export class Register extends Block<object> {
  static componentName = 'Register';

  constructor() {
    super({});
  }

  render() {
    return `
      <main class="main">
        {{{ FormRegister formName="register" title="Регистрация" buttonName="Создать аккаунт" link="login" linkName="Войти"}}}
      </main>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Register());
});
