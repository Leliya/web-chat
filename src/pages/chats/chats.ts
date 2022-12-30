import dataChats from '../../data/users.json';
import dataMessages from '../../data/messages.json';
import { Block, renderDOM, registerComponent } from '../../utils/';
import { Button } from '../../partials/components/button/button';
import { Chatbar } from '../../partials/chatBar/chatbar';
import { Chat } from '../../partials/chatBar/components/chat/chat';
import { Avatar } from '../../partials/components/avatar/avatar';
import { Dialog } from '../../partials/dialog/dailog';
import { GroupMessage } from '../../partials/dialog/components/groupMessage/groupMessage';
import { Message } from '../../partials/dialog/components/message/message';
import { Input } from '../../partials/components/input/input';

registerComponent(Chatbar);
registerComponent(Dialog);
registerComponent(Chat);
registerComponent(Button);
registerComponent(Avatar);
registerComponent(GroupMessage);
registerComponent(Message);
registerComponent(Input);

interface ChatsProps{
  data:object[];
  messages:object[];
}

export class Chats extends Block<ChatsProps> {
  static componentName = 'Chats'
  constructor() {
    super({
      data: dataChats,
      messages: dataMessages
    });
  }

  render() {
    return `
    <main class="chats">
    {{{Chatbar chats=data}}}
    {{{Dialog name="Вадим" dataMessages=messages}}}
  </main>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Chats());
});

// {{#> "modal/modal" class=classModal title=titleAdd buttonName="Добавить" form="user"}}
//       <form class="modal__form modal__form_user" id="user" name="user">
//         {{> "components/input/input"
//           inputName="login"
//           label="Логин"
//           type="text"
//           minSymbol="2"
//           maxSymbol="30"}}
//       </form>
//     {{/ "modal/modal" }}
