import { Form } from '../../../../partials/components/form/form';

export class FormProfile extends Form {
  static componentName = 'FormProfile';
  protected render(): string {
    return `
    <div class="profile__box">
      {{{Avatar class="profile__avatar"}}}
        {{#if isStaticData}}
          <h3 class="profile__name">Иван</h3>
        {{/if}}
      <form class="profile__form" id="profile" name="profile">
        {{#if isChangePassword}}
          {{{FieldProfile label="Старый пароль" type="password"  inputName="oldPassword" minSymbol=6 maxSymbol=30 ref="oldPassword"}}}
          {{{FieldProfile label="Новый пароль" type="password"  inputName="newPassword" minSymbol=6 maxSymbol=30 ref="newPassword"}}}
          {{{FieldProfile label="Повторите новый пароль" type="password"  inputName="newPassword_repeat" minSymbol=6 maxSymbol=30 ref="newPassword_repeat"}}}
        {{else}}
          {{{FieldProfile label="Почта" type="email"  inputName="email" ref="email"  value="pochta@yandex.ru"}}}
          {{{FieldProfile label="Логин" type="text"  inputName="login" minSymbol=2 maxSymbol=30 ref="login" value="ivanivanov"}}}
          {{{FieldProfile label="Имя" type="text"  inputName="first_name" minSymbol=2 maxSymbol=30 ref="first_name" value="Иван"}}}
          {{{FieldProfile label="Фамилия" type="text"  inputName="second_name" minSymbol=2 maxSymbol=30 ref="second_name" value="Иванов"}}}
          {{{FieldProfile label="Имя в чате" type="text"  inputName="display_name" minSymbol=2 maxSymbol=30 ref="display_name" value="Иван"}}}
          {{{FieldProfile label="Телефон" type="tel"  inputName="phone" ref="phone" value="+7(909)9673030"}}}
        {{/if}}
      </form>
      {{#if isStaticData}}
        <div class="profile__control">
          <button class="profile__button" type="button">Изменить данные</button>
          <button class="profile__button" type="button">Изменить пароль</button>
          <a href="../../login/login.html" class="profile__button profile__button_exit">Выйти</a>
        </div>
      {{else}}
        {{{Button class="profile" type="submit" caption="Сохранить" form="profile" onClick=onClick}}}
      {{/if}}
    </div>
  `;
  }
}
