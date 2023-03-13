import ChatsController from '../../controllers/ChatsController';
import MessageController from '../../controllers/MessageController';
import UserController from '../../controllers/UserController';
import Block from '../../utils/Block';
import { withMessages } from '../../utils/HOC/withMessages';
import Store from '../../utils/Store';
import { scrollDown } from '../../utils/utility/scrollDown';
import { validateInput, errorInterpretator } from '../../utils/validateInput';

interface DialogProps {
  store: Store<AppState>;
  user: User | null;
  onClick: (event: Event) => void;
  onFocus: (event: Event) => void;
  name: string;
  dataMessages: object[];
  isOpenMenuControl: boolean;
  isOpenMenuInsert: boolean;
  onToggleMenuControl: () => void;
  onToggleMenuInsert: () => void;
  addUserInChat: (data: { login: string }) => void;
  deleteUserFromChat: (data: { login: string }) => void;
  onOpenModalAddUser: () => void;
  onOpenModalDeleteUser: () => void;
  onOpenModalDeleteChat: () => void;
  deleteChat: () => void;
  messages: MessageType[];
  activeChat: ChatType;
}

class Dialog extends Block<DialogProps> {
  static componentName = 'Dialog';

  constructor(props: DialogProps) {
    super({
      ...props,
      onToggleMenuControl: () => this.onToggleElement('menuChats'),
      onToggleMenuInsert: () => this.onToggleElement('menuInsert'),
      onOpenModalAddUser: () => this.onToggleElement('modalAddUser'),
      onOpenModalDeleteUser: () => this.onToggleElement('modalDeleteUser'),
      onOpenModalDeleteChat: () => this.onToggleElement('modalDeleteChat'),
      addUserInChat: (data) => {
        this.searchUserByLogin(data)
          .then((userId) => {
            const chatId = this.props.activeChat.id;
            ChatsController.addUsersInChat(userId, chatId);
          })
          .then(() => this.onToggleElement('modalAddUser'))
          .catch((err) => console.log(err));
      },
      deleteUserFromChat: (data) => {
        this.searchUserByLogin(data).then((userId) => {
          const chatId = this.props.activeChat.id;
          ChatsController.deleteUserFromChat(userId, chatId)
            .then(() => this.onToggleElement('modalDeleteUser'))
            .catch((err) => console.log(err));
        });
      },
      deleteChat: () => {
        ChatsController.deleteChat(this.props.activeChat.id)
          .then(() => {
            const newChatsList = window.store
              .getState()
              .chats.filter((chat) => chat.id !== this.props.activeChat.id);
            window.store.set({ chats: newChatsList }, '');
          })
          .catch((err) => console.log(err));

        console.log('3ok');
      },
      onClick: (e: Event) => {
        e.preventDefault();
        const input = this.refs.message.element as HTMLInputElement;

        const error = errorInterpretator(
          validateInput(input.value, 'message').errors,
          'message'
        ).message;

        if (!error) {
          MessageController.sendMessage(input.value);
        } else {
          return;
        }
        input.value = '';
      },
    });
  }

  searchUserByLogin(data: { login: string }) {
    return UserController.searchUserByLogin(data).then((res) => {
      const arrayUsers = res;
      const searchedUser = arrayUsers.filter(
        (user) => user.login === data.login
      );
      return searchedUser[0].id;
    });
  }

  onToggleElement(ref: string) {
    this.refs[ref].toggleDisplayElement();
  }

  componentDidMount(props: DialogProps): void {
    super.componentDidMount(props);
    scrollDown('messageFeed');
  }

  componentDidUpdate(
    oldProps?: DialogProps | undefined,
    newProps?: DialogProps | undefined
  ): boolean {
    super.componentDidUpdate(oldProps, newProps);
    setTimeout(() => scrollDown('messageFeed'), 1);
    return true;
  }

  protected render(): string {
    return `
    {{#if activeChat}}
    <div class="dialog">
      <header class="dialog__header">
        {{{Avatar class="dialog__avatar"}}}
        <h2 class="dialog__username">{{ activeChat.title }}</h2>
        {{{Button class="dialog-header" type="button" label="Открыть меню" onClick=onToggleMenuControl}}}
        {{{MenuChats ref="menuChats" addUserInChat=onOpenModalAddUser deleteUserFromChat=onOpenModalDeleteUser deleteChat=onOpenModalDeleteChat}}}
      </header>
      <div class="dialog__feed" id="messageFeed">
      {{#each messages}}
       {{{ GroupMessage dataMessages=this user=../user}}}
       {{/each}}
      </div>
      <form class="dialog__form" name="message" id="message">
        {{{Button class="dialog-insert" type="button" label="Вставить файл"  onClick=onToggleMenuInsert}}}
        {{{Input
          class="dialog__input"
          type="text"
          inputName="message"
          label="Сообщение"
          ref="message"
        }}}
        {{{Button class="dialog-submit" type="submit" label="Отправить сообщение" onClick=onClick}}}

      </form>
      {{{MenuInsert ref="menuInsert" }}}
      {{{ModalChats
        formName="addUser"
        title="Добавить пользователя"
        buttonName="Добавить"
        ref="modalAddUser"
        fieldName="Логин"
        inputName="login"
        onClick=onOpenModalAddUser
        handleSubmit=addUserInChat
      }}}
      {{{ModalChats
        formName="deleteUser"
        title="Удалить пользователя"
        buttonName="Удалить"
        ref="modalDeleteUser"
        fieldName="Логин"
        inputName="login"
        onClick=onOpenModalDeleteUser
        handleSubmit=deleteUserFromChat
      }}}
      {{{ModalChats
        formName="deleteChat"
        title="Вы уверены?"
        buttonName="Удалить чат"
        ref="modalDeleteChat"
        onClick=onOpenModalDeleteChat
        handleSubmit=deleteChat
      }}}
    </div >
    {{else}}
    <div class="dialog dialog_empty">
    <p class="dialog__empty-message">Выберите чат или создайте новый</p>
    </div>
    {{/if}}
    `;
  }
}

export default withMessages(Dialog);
