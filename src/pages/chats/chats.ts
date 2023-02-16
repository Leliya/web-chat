import { Block, registerComponent } from '../../utils/';
import { Button } from '../../partials/components/button/button';
import Chatbar from '../../partials/chatBar/chatbar';
import Chat from '../../partials/chatBar/components/chat/chat';
import Avatar from '../../partials/components/avatar/avatar';
import Dialog from '../../partials/dialog/dialog';
import GroupMessage from '../../partials/dialog/components/groupMessage/groupMessage';
import { Message } from '../../partials/dialog/components/message/message';
import { Input } from '../../partials/components/input/input';
import { withRouter } from '../../utils/HOC/withRouter';
import Store from '../../utils/Store';
import { RouterInterface } from '../../utils/Router/RouterInterface';
import { MenuChats } from '../../partials/dialog/components/menuChats/menuChats';
import { MenuItem } from '../../partials/menu/components/menuItem/menuItem';
import { MenuInsert } from '../../partials/dialog/components/menuInsert/menuInsert';
import { FormModalChats } from '../../partials/dialog/components/formModalChats/formModalChats';
import { ModalChats } from '../../partials/dialog/components/modalChats/modalChats';
import { Field } from '../../partials/components/field/field';

registerComponent(Chatbar);
registerComponent(Dialog);
registerComponent(Chat);
registerComponent(Button);
registerComponent(Avatar);
registerComponent(GroupMessage);
registerComponent(Message);
registerComponent(Field);
registerComponent(Input);
registerComponent(MenuChats);
registerComponent(MenuInsert);
registerComponent(MenuItem);
registerComponent(FormModalChats);
registerComponent(ModalChats);

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
  router: RouterInterface;
  store: Store<AppState>;
  user: User | null;
  data: ChatType[];
  messages: MessageType[];
}

class Chats extends Block<ChatsProps> {
  static componentName = 'Chats';

  componentDidUpdate(): boolean {
    return this.props.store.getState().screen === 'chats';
  }

  render() {
    return `
    <main class="chats">
      {{{Chatbar router=router}}}
      {{{Dialog}}}
    </main>
    `;
  }
}
export default withRouter(Chats);
