import { Form } from "../../../../partials/components/form/form";

export class FormLogin extends Form {
  static componentName = 'FormLogin'

  protected render(): string {
    return `
      <div class="form-container">
        <form class="form" id={{formName}} name={{formName}} novalidate>
          <h2 class="form__title">{{title}}</h2>
          <fieldset class="form__fieldset" form={{formName}}>
          {{{Field label="Почта" type="email"  inputName="email" ref="email"}}}
          {{{Field label="Пароль" type="password"  inputName="password" minSymbol=6 maxSymbol=30 ref="password"}}}
          </fieldset>
          <div class="form__control">
            {{{Button class="form" type="submit" form=formName caption=buttonName onClick=onClick ref=buttonForm}}}
            <a href="../{{link}}/{{link}}.html" class="form__link">{{linkName}}</a>
          </div>
        </form>
      </div>`;
  }
}
