import inputsRegister from '../../data/inputsRegister.json';
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

interface RegisterProps{
  data:object
}

export class Register extends Block<RegisterProps> {
  static componentName = 'Register'

  constructor() {
    super({
      data: inputsRegister,
    });
  }

  render() {
    return `
      <main class="main">
        {{{ Form formName="register" title="Регистрация" buttonName="Создать аккаунт" link="login" linkName="Войти" inputs=data}}}
      </main>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Register());
});
