import messageController from '../../../../controllers/MessageController';
import { RESOURCE_URL } from '../../../../data/const';
import Block from '../../../../utils/Block';
//import { withActiveChat } from '../../../../utils/HOC/withActiveChat';
import { withUser } from '../../../../utils/HOC/withUser';
import Store from '../../../../utils/Store';
import cloneDeep from '../../../../utils/utility/cloneDeep';
import { scrollDown } from '../../../../utils/utility/scrollDown';
import { transformDate } from '../../../../utils/utility/transformDate';

interface ChatProps {
  store: Store<AppState>;
  chat: ChatType;
  name: string;
  isChatActive: boolean;
  dateMessage: string;
  text: string;
  count?: number;
  events: { [key: string]: (event: Event) => void };
  click: string;
  onClick: (e: Event) => void;
  activeChat: ChatType;
  user: User;
}

class Chat extends Block<ChatProps> {
  static componentName = 'Chat';
  constructor(props: ChatProps) {
    super({
      ...props,
      events: {
        click: () => this.chooseChat(),
      },
    });
  }

  formatDate() {
    if (this.props.chat.last_message) {
      const date = this.props.chat.last_message.time;
      return transformDate(date);
    }
    return '';
  }

  chooseChat() {
    window.store.set({ activeChat: cloneDeep(this.props.chat) },"");
    window.store.set({ messages: [] }, '');
    messageController.getMessages(0);
    setTimeout(() => scrollDown('messageFeed'), 100);
  }

  getAuthorMessage() {
    const authorLastMessage = this.props.chat.last_message?.user.login;
    const user = this.props.user?.login;
    if (authorLastMessage === user) {
      return 'Вы:';
    } else {
      return '';
    }
  }

  getAvatar() {
    if (this.props.chat?.avatar) {
      return RESOURCE_URL + this.props.chat.avatar;
    }
    return "";
  }

  protected render(): string {
    return `
    <li class="chat">
    {{#if ${this.props.activeChat?.id === this.props.chat.id}}}
      <div class="chat__content chat__content_active">
    {{else}}
      <div class="chat__content">
    {{/if}}
        {{{Avatar class="chat__avatar" avatar="${this.getAvatar()}"}}}
        <h3 class="chat__title">{{chat.title}}</h3>
        <p class="chat__text">
        <span>${this.getAuthorMessage()}</span>
        {{chat.last_message.content}}</p>
        <div class="chat__info">
          <span class="chat__date">
          ${this.formatDate()}
          </span>
            {{#if chat.unread_count}}
              <span class="chat__count-new-message">{{chat.unread_count}}</span>
            {{/if}}
        </div>
      </div>
    </li>
  `;
  }
}

export default withUser(Chat);
