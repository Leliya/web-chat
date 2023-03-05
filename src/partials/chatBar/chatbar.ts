import ChatsController from '../../controllers/ChatsController';
import Block from '../../utils/Block';
import { createChatsSocket } from '../../utils/createChatsSocket';
import { withActiveChat } from '../../utils/HOC/withActiveChat';
import { withChats } from '../../utils/HOC/withChats';
import { RouterInterface } from '../../utils/Router/RouterInterface';

interface ChatbarProps {
  router: RouterInterface;
  onGoProfile: () => void;
  onOpenModalCreateChats: () => void;
  createChat: (data: Record<string, string>) => void;
  chats: ChatType[];
  activeChat: ChatType;
}

class Chatbar extends Block<ChatbarProps> {
  static componentName = 'Chatbar';
  constructor(props: ChatbarProps) {
    super({
      ...props,
      onGoProfile: () => this.props.router.go('/settings'),
      onOpenModalCreateChats: () => {
        this.refs.modalСreateChats.toggleDisplayElement();
      },

      createChat: (data) => {
        ChatsController.createChat(data)
          .then(() =>
            ChatsController.getChats()
              .then((dataChats) => {
                window.store.set({ chats: dataChats }, '');
                window.store.set({ sockets: createChatsSocket(dataChats) }, '');
                this.refs.modalСreateChats.toggleDisplayElement(); //<== Не работает закрытие окна, исправить
              })
              .catch((err) => console.log(err))
          )
          .catch((err) => console.log(err));
      },
    });
  }

  protected render(): string {
    return `
      <div class="chatBar">
        <div class="chatBar__profile-link">
          {{{Button class="createChat" type="button" caption="Создать чат"
           onClick=onOpenModalCreateChats}}}
          {{{Button class="chatBarLink" type="button" caption="Профиль
          ❯" onClick=onGoProfile}}}
        </div>
        <form class="chatBar__search" name="search" id="search" >
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
              {{{Chat chat=this onClick=@root.onChooseChat activeChat=@root.activeChat}}}
          {{/each}}
        </ul>
        {{{ModalChats
          formName="createChats"
          title="Создать чат"
          buttonName="Создать"
          ref="modalСreateChats"
          fieldName="Название"
          inputName="title"
          onClick=onOpenModalCreateChats
          handleSubmit=createChat
        }}}
      </div>
  `;
  }
}

export default withActiveChat(withChats(Chatbar));
