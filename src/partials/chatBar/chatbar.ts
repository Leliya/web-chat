import Block from '../../utils/Block';

interface ChatbarProps{
  chats:object[];
}

export class Chatbar extends Block<ChatbarProps> {
  static componentName = 'Chatbar'
  protected render(): string {
    return `
      <div class="chatBar">
        <div class="chatBar__profile-link">
          <a href="../profile/profile.html" class="chatBar__link">Профиль
            &#10095;
          </a>
        </div>
        <form class="chatBar__search" name="search" id="search">
          <input
            type="text"
            class="chatBar__search-input"
            name="search"
            id="search"
            placeholder="Поиск"
            required="true"
          />
        </form>
        <ul class="chatBar__chatList">
          {{#each chats}}
            {{{Chat chat=this}}}
          {{/each}}
        </ul>
      </div>
  `;
  }
}
