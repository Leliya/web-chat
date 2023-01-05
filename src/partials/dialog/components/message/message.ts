import Block from '../../../../utils/Block';

interface MessageProps {
  message: object;
  owner: string;
  delivered: boolean;
  time: string;
  text: string;
}

export class Message extends Block<MessageProps> {
  static componentName = 'Message';

  protected render(): string {
    return `
    <div class="message message_owner_{{message.owner}}">
      <p class="message__text">
        <span class="message__box">
          <span class="message__info">
            {{#if message.isDelivered}}
              <span class="message__delivery"></span>
            {{/if}}
            <span class="message__time message__time_owner_{{message.owner}}">
              {{message.time}}
            </span>
          </span>
        </span>
        {{message.text}}
      </p>
    </div>`;
  }
}
