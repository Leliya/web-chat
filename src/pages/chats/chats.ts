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

type ChatType = {
  name: string;
  text: string;
  dateMessage: string;
  count?: number;
  active?: boolean;
};

type MessageType = {
  text: string;
  time: string;
  owner: string;
  isDelivered?: boolean;
};

interface ChatsProps {
  // message:{
  //   text:string,
  //   time:string,
  //   owner:string,
  //   isDelivered?:boolean
  // }
  data: ChatType[];
  messages: MessageType[];
}

export class Chats extends Block<ChatsProps> {
  static componentName = 'Chats';
  constructor() {
    super({
      data:dataChats,
      messages: dataMessages,
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
