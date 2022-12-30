import { Form } from "../../../../partials/components/form/form";

export class FormProfile extends Form {
  static componentName = 'FormProfile'
  protected render(): string {
    return `
    <div class="profile__box">
    {{{Avatar class="profile__avatar"}}}
      {{#if staticData}}
        <h3 class="profile__name">Иван</h3>
      {{/if}}
    <form class="profile__form" id="profile" name="profile">
    {{#if changePassword}}
      {{#each inputsPassword}}
          {{{FieldProfile input=this ref=this.inputName}}}
      {{/each}}
    {{else}}
      {{#each inputsUser}}
      {{{FieldProfile input=this ref=this.inputName}}}
      {{/each}}
    {{/if}}
  </form>
  {{#if staticData}}
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

// {{#if staticData}}
//     <div class="profile__control">
//       <button class="profile__button" type="button">Изменить данные</button>
//       <button class="profile__button" type="button">Изменить пароль</button>
//       <a href="../../pages/login/login.hbs" class="profile__button profile__button_exit">Выйти</a>
//     </div>
//   {{else}}
//   {{{Button class="profile" type="submit" caption="Сохранить" form="profile" onClick=onClick ref="buttonProfile"}}}
//   {{/if}}
