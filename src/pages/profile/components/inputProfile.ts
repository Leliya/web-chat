import { Block } from '../../../utils';

interface InputProfileProps {
  events: { [key: string]: (event: Event) => void };
  onChange: (event: Event) => void;
}

export class InputProfile extends Block<InputProfileProps> {
  static componentName = 'InputProfile';

  constructor(props: InputProfileProps) {
    super({
      ...props,
      events: {
        change: props.onChange,
      },
    });
  }

  protected render(): string {
    return `
    <input
      class={{class}}
      type={{type}}
      name={{inputName}}
      id={{inputName}}
      required="true"
      {{#if value}}
        value={{value}}
      {{else}}
        value=""
      {{/if}}
      {{#if accept}}
        accept={{accept}}
      {{/if}}
    />
    `;
  }
}
