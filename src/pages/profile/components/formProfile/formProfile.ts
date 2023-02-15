import AuthController from '../../../../controllers/AuthController';
import UserController from '../../../../controllers/UserController';
import { Form, FormProps } from '../../../../partials/components/form/form';
import { logout } from '../../../../utils/auth';
import { withRouter } from '../../../../utils/HOC/withRouter';
import { withUser } from '../../../../utils/HOC/withUser';

class FormProfile extends Form {
  static componentName = 'FormProfile';
  static isChangePassword = false;
  static isStaticDataProfile = true;

  constructor(props: FormProps) {
    super(props);
    this.setProps({
      isChangePassword: false,
      isStaticDataProfile: true,
      handleClickLogout: () => {
        AuthController.logout()
          .then(() => {
            logout(this.props.router);
          })
          .catch((err) => console.log(err));
      },
      handleClickChangeProgile: () =>
        this.setProps({
          isChangePassword: false,
          isStaticDataProfile: false,
        }),
      handleClickChangePassword: () =>
        this.setProps({
          isChangePassword: true,
          isStaticDataProfile: false,
        }),
    });
  }

  submitForm(data: User) {
    super.submitForm(data);
    if (this.props.isChangePassword) {
      UserController.changePassword(data)
        .then(() =>
          this.setProps({
            isChangePassword: false,
            isStaticDataProfile: true,
          })
        )
        .catch((err) => console.log(err));
    } else {
      UserController.changeProfile(data)
        .then((res) => window.store.set(res, 'user'))
        .then(() =>
          this.setProps({
            isChangePassword: false,
            isStaticDataProfile: true,
          })
        )
        .catch((err) => console.log(err));
    }
  }

  protected render(): string {
    return `
      <form class="profile__form" id="profile" name="profile" >
      {{#if isStaticDataProfile}}
            <h3 class="profile__name">{{user.first_name}}</h3>
          {{/if}}
        {{#if isChangePassword}}
          {{{FieldProfile label="Старый пароль" type="password"  inputName="oldPassword" minSymbol=6 maxSymbol=30 ref="oldPassword"}}}
          {{{FieldProfile label="Новый пароль" type="password"  inputName="newPassword" minSymbol=6 maxSymbol=30 ref="newPassword"}}}
          {{{FieldProfile label="Повторите новый пароль" type="password"  inputName="newPassword_repeat" minSymbol=6 maxSymbol=30 ref="newPassword_repeat"}}}
        {{else}}
          {{{FieldProfile label="Почта" type="email"  inputName="email" ref="email"  value=user.email disabled=isStaticDataProfile}}}
          {{{FieldProfile label="Логин" type="text"  inputName="login" minSymbol=2 maxSymbol=30 ref="login" value=user.login disabled=isStaticDataProfile}}}
          {{{FieldProfile label="Имя" type="text"  inputName="first_name" minSymbol=2 maxSymbol=30 ref="first_name" value=user.first_name disabled=isStaticDataProfile}}}
          {{{FieldProfile label="Фамилия" type="text"  inputName="second_name" minSymbol=2 maxSymbol=30 ref="second_name" value=user.second_name disabled=isStaticDataProfile}}}
          {{{FieldProfile label="Имя в чате" type="text"  inputName="display_name" minSymbol=2 maxSymbol=30 ref="display_name" value=user.display_name disabled=isStaticDataProfile}}}
          {{{FieldProfile label="Телефон" type="tel"  inputName="phone" ref="phone" value=user.phone disabled=isStaticDataProfile}}}
        {{/if}}
      {{#if isStaticDataProfile}}
        <div class="profile__control">
          {{{Button class="changeProfile" type="button" caption="Изменить данные" form="profile" onClick=handleClickChangeProgile}}}
          {{{Button class="changeProfile" type="button" caption="Изменить пароль" form="profile" onClick=handleClickChangePassword}}}
          {{{Button class="changeProfile" type="button" caption="Выйти" form="profile" onClick=handleClickLogout}}}
        </div>
      {{else}}
        {{{Button class="profile" type="submit" caption="Сохранить" form="profile" }}}
      {{/if}}
</form>
  `;
  }
}

export default withRouter(withUser(FormProfile));
