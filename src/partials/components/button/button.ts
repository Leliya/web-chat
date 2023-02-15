import Block from '../../../utils/Block';
interface ButtonProps {
  events: { [key: string]: (event: Event) => void };
  click: string;
  onClick: (event: Event) => void;
}

export class Button extends Block<ButtonProps> {
  static componentName = 'Button';

  constructor(props: ButtonProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }

  protected render(): string {
    return `
    <button
      class="button button_{{class}}"
      type={{type}}
      {{#if label}}
        aria-label={{label}}
      {{/if}}
      {{#if form}}
        form={{form}}
      {{/if}}>
      {{#if caption}}
        {{caption}}
      {{/if}}
    </button>;`;
  }
}
