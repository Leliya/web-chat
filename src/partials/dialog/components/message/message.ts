import Block from '../../../../utils/Block';
import { transformDate } from '../../../../utils/utility/transformDate';

interface MessageProps {
  message: MessageType;
  owner: boolean;
  is_read: boolean;
  time: string;
  text: string;
  user: User;
}

export class Message extends Block<MessageProps> {
  static componentName = 'Message';
  static owner = false;

  detectOwner(){
    return this.props.message.user_id === this.props.user.id?"my":"another"
  }

  formatDate() {
    if (this.props.message.time) {
      const date = this.props.message.time;
      return transformDate(date);
    }
    return '';
  }

  protected render(): string {
    //console.log(this.props)
    return `
    <div class="message message_owner_${this.detectOwner()}">
      <p class="message__text">
        <span class="message__box">
          <span class="message__info">
          {{#if ${this.detectOwner()==='my'}}}
            {{#if message.is_read}}
              <span class="message__delivery"></span>
            {{/if}}
            {{/if}}
            <span class="message__time message__time_owner_${this.detectOwner()}">
            ${this.formatDate()}
            </span>
          </span>
        </span>
        {{message.content}}
      </p>
    </div>`;
  }
}
