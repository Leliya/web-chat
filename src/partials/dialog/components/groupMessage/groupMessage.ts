import Block from '../../../../utils/Block';

interface GroupMessageProps {
  dateDialog: string;
  dataMessages: object[];
}

export class GroupMessage extends Block<GroupMessageProps> {
  static componentName = 'GroupMessage';

  protected render(): string {
    return `
    <section class="group-message">
      <h4 class="group-message__date">
        {{dateDialog}}
      </h4>
      <ul class="group-message__messages">
      {{#each dataMessages}}
        {{{Message message=this}}}
      {{/each}}
      </ul>
    </section>
    `;
  }
}
