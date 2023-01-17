import { Form } from "../../../../partials/components/form/form";

export class FormRegister extends Form {
  static componentName = 'FormRegister'

  protected render(): string {
    return `
      <div class="form-container">
        <form class="form" id={{formName}} name={{formName}} novalidate>
          <h2 class="form__title">{{title}}</h2>
          <fieldset class="form__fieldset" form={{formName}}>
            {{{Field label="Почта" type="email"  inputName="email" ref="email"}}}
            {{{Field label="Логин" type="text"  inputName="login" minSymbol=2 maxSymbol=30 ref="login"}}}
            {{{Field label="Имя" type="text"  inputName="first_name" minSymbol=2 maxSymbol=30 ref="first_name"}}}
            {{{Field label="Фамилия" type="text"  inputName="second_name" minSymbol=2 maxSymbol=30 ref="second_name"}}}
            {{{Field label="Телефон" type="tel"  inputName="phone" ref="phone"}}}
            {{{Field label="Пароль" type="password"  inputName="password" minSymbol=6 maxSymbol=30 ref="password"}}}
            {{{Field label="Пароль (ещё раз)" type="password"  inputName="password_repeat" minSymbol=6 maxSymbol=30 ref="password_repeat"}}}
          </fieldset>
          <div class="form__control">
            {{{Button class="form" type="submit" form=formName caption=buttonName onClick=onClick ref=buttonForm}}}
            <a href="../{{link}}/{{link}}.html" class="form__link">{{linkName}}</a>
          </div>
        </form>
      </div>`;
  }
}
