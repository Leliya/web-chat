import Block from '../../../../utils/Block';

interface ChatProps {
  chat: object;
  name: string;
  active?: boolean;
  dateMessage: string;
  text: string;
  count?: number;
}

export class Chat extends Block<ChatProps> {
  static componentName = 'Chat';

  protected render(): string {
    return `
    <li class="chat">
    {{#if chat.active}}
      <div class="chat__content chat__content_active">
    {{else}}
      <div class="chat__content">
    {{/if}}
        {{{Avatar class="chat__avatar"}}}
        <h3 class="chat__title">{{chat.name}}</h3>
        <p class="chat__text">{{chat.text}}</p>
        <div class="chat__info">
          <span class="chat__date">{{chat.dateMessage}}</span>
            {{#if chat.count}}
              <span class="chat__count-new-message">{{chat.count}}</span>
            {{/if}}
        </div>
      </div>
    </li>

  `;
  }
}
