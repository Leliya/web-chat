import Block from '../../utils/Block';
import { validateInput } from '../../utils/validateForm';

interface DialogProps {
  onClick: (event: Event) => void;
  onFocus: (event: Event) => void;
  name: string;
  dataMessages: object[];
}

export class Dialog extends Block<DialogProps> {
  static componentName = 'Dialog'

  constructor(props: DialogProps) {
    super({
      ...props,
      onClick: (e: Event) => {
        e.preventDefault();
        const input = this.refs.message.element as HTMLInputElement;
        console.log(input.value);
        console.log(validateInput(input.value, 'message'));
      },
    });
  }

  protected render(): string {
    return `
    <div class="dialog">
      <header class="dialog__header">
        {{{Avatar class="dialog__avatar"}}}
        <h2 class="dialog__username">{{ name }}</h2>
        {{{Button class="dialog-header" type="button" label="Открыть меню"}}}
      </header>
      <div class="dialog__feed">
        {{{ GroupMessage dataMessages=dataMessages dateDialog="17 июня"}}}
        {{{ GroupMessage dataMessages=dataMessages dateDialog="18 июня"}}}
        {{{ GroupMessage dataMessages=dataMessages dateDialog="19 июня"}}}
      </div>
      <form class="dialog__form" name="message" id="message">
        {{{Button class="dialog-insert" type="button" label="Вставить файл"}}}
        {{{Input
          class="dialog__input"
          type="text"
          inputName="message"
          label="Сообщение"
          ref="message"
        }}}
        {{{Button class="dialog-submit" type="submit" label="Отправить сообщение" onClick=onClick}}}
      </form>
    </div >
    `;
  }
}
