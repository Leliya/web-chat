import Block from '../../../../utils/Block';
import { getMonth } from '../../../../utils/utility/transformDate';

interface GroupMessageProps {
  dateDialog: string;
  dataMessages: MessageType[];
}

class GroupMessage extends Block<GroupMessageProps> {
  static componentName = 'GroupMessage';

  getDateDialog() {
    const date = new Date(this.props.dataMessages[0].time);
    return `${date.getDate()} ${getMonth(
      date.getMonth()
    )} ${date.getFullYear()}`;
  }

  protected render(): string {
    console.log(this.props);
    return `
    <section class="group-message">
      <h4 class="group-message__date">
        ${this.getDateDialog()}
      </h4>
      <ul class="group-message__messages">
        {{#each dataMessages}}
          {{{Message message=this user=../user}}}
        {{/each}}
      </ul>
    </section>
    `;
  }
}

export default GroupMessage;
