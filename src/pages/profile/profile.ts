import inputsProfileUser from '../../data/inputsProfileUser.json';
import inputsProfilePassword from '../../data/inputsProfilePassword.json';
import { Block, renderDOM, registerComponent } from '../../utils/';
import { Button } from '../../partials/components/button/button';
import { Avatar } from '../../partials/components/avatar/avatar';
import { FormProfile } from './components/formProfile/formProfile';
import { FieldProfile } from './components/fieldProfile/fieldProfile';
import { Input } from '../../partials/components/input/input';
import { ErrorInput } from '../../partials/components/errorInput/errorInput';

registerComponent(Button);
registerComponent(Avatar);
registerComponent(FormProfile);
registerComponent(FieldProfile);
registerComponent(Input);
registerComponent(ErrorInput);

interface ProfileProps {
  inputsUser: object;
  inputsPassword: object;
  staticData: boolean;
  changePassword: boolean;
}

export class Profile extends Block<ProfileProps> {
  constructor() {
    super({
      staticData: true,
      changePassword: false,
      inputsUser: inputsProfileUser,
      inputsPassword: inputsProfilePassword,
    });
  }

  render() {
    return `
      <main class="profile">
      <div class="profile__button-goback">
      {{{Button class="goback" type="button" label="Назад"}}}
    </div>
      {{{FormProfile staticData=staticData changePassword=changePassword inputsUser=inputsUser inputsPassword=inputsPassword}}}
      </main>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Profile());
});

// render() {
//   return `
//     <main class="main">
//     <div class="profile__button-goback">
//     {{{Button class="goback" type="button" label="Назад"}}}
//   </div>
//   <div class="profile__box">
//   {{{Avatar class="profile__avatar"}}}
//     {{#if staticData}}
//       <h3 class="profile__name">Иван</h3>
//     {{/if}}
//     <form class="profile__form">
//       {{#if changePassword}}
//         {{#each inputsPassword}}
//           <label class="profile__label">
//             {{this.label}}
//             <input
//               class="profile__input {{this.inputName}}-input-error"
//               type={{this.type}}
//               name={{this.inputName}}
//               id={{this.inputName}}
//               placeholder={{this.label}}
//               required="true"
//               value={{this.value}}
//               minlength={{this.minSymbol}}
//               maxLength={{this.maxSymbol}}
//             />
//           </label>
//         {{/each}}
//       {{else}}
//         {{#each inputsUser}}
//           <label class="profile__label">
//             {{label}}
//             <input
//               class="profile__input {{this.inputName}}-input-error"
//               type={{this.type}}
//               name={{this.inputName}}
//               id={{this.inputName}}
//               placeholder={{this.label}}
//               required="true"
//               value={{this.value}}
//               minlength={{this.minSymbol}}
//               maxLength={{this.maxSymbol}}
//             />
//           </label>
//         {{/each}}
//       {{/if}}
//     </form>
//     {{#if staticData}}
//       <div class="profile__control">
//         <button class="profile__button" type="button">Изменить данные</button>
//         <button class="profile__button" type="button">Изменить пароль</button>
//         <a href="../../pages/login/login.hbs" class="profile__button profile__button_exit">Выйти</a>
//       </div>
//     {{else}}
//     {{{Button class="profile" type="submit" caption="Сохранить"}}}
//     {{/if}}
//   </div>
//     </main>
//   `;
// }

// {{#> "modal/modal" class=classModal title=titleStart errorRequest=errorRequest buttonName="Поменять" form="avatar"}}
//       <form class="modal__form" id="avatar" name="avatar">
//         {{#if uploadFile}}
//           <span class="modal__filename">{{uploadFile}}</span>
//         {{else}}
//           <label class="modal__label">Выбрать файл на компьютере
//             <input type="file" class="modal__input" accept=".jpg, .jpeg, .png" id="avatar" name="avatar">
//           </label>
//         {{/if}}
//       </form>
//     {{/ "modal/modal" }}
