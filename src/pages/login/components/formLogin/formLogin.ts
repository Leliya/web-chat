import AuthController from '../../../../controllers/AuthController';
import { Form } from '../../../../partials/components/form/form';
import { login } from '../../../../utils/auth';
import { withRouter } from '../../../../utils/HOC/withRouter';

class FormLogin extends Form {
  static componentName = 'FormLogin';

  submitForm(data: LoginType) {
    super.submitForm(data);
    AuthController.login(data)
      .then(() => {
        login(this.props.router);
      })
      .catch((err) => console.log(err));
  }

  protected render(): string {
    return `
        <form class="form" id={{formName}} name={{formName}} novalidate>
          <h2 class="form__title">{{title}}</h2>
          <fieldset class="form__fieldset" form={{formName}}>
          {{{Field label="Логин" type="text"  inputName="login" minSymbol=2 maxSymbol=30 ref="login"}}}
          {{{Field label="Пароль" type="password"  inputName="password" minSymbol=6 maxSymbol=30 ref="password"}}}
          </fieldset>
          <div class="form__control">
            {{{Button class="form" type="submit" form=formName caption=buttonName onClick=onClick ref=buttonForm}}}
            {{{Button class="link" type="button" caption=linkName onClick=onGoRegister}}}
          </div>
        </form>`;
  }
}

export default withRouter(FormLogin);
