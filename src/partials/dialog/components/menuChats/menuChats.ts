import { Menu } from '../../../menu/menu';

export class MenuChats extends Menu {
  static componentName = 'MenuChats';

  protected render(): string {
    //console.log(this.props);
    return `
    <ul class="menu ${this.props.classOpenMenu} menu_control">
        {{{MenuItem class="add-user" caption="Добавить пользователя" ref="menuItemAdd" onClick=addUserInChat}}}
        {{{MenuItem class="delete-user" caption="Удалить пользователя" ref="menuItemDelete" onClick=deleteUserFromChat}}}
        {{{MenuItem class="clear-chat" caption="Удалить чат" ref="menuItemClear" onClick=deleteChat}}}
    </ul>
  `;
  }
}
