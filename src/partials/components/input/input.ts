import Block from '../../../utils/Block';
import './input.css';

interface InputProps {
  events: { [key: string]: (event: Event) => void };
  blur: string;
  focus: string;
  onBlur: (event: Event) => void;
  onFocus: (event: Event) => void;
  class: string;
  type: string;
  inputName: string;
  label: string;
  value?: string;
}

export class Input extends Block<InputProps> {
  static componentName = 'Input';

  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        blur: props.onBlur,
        focus: props.onFocus,
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
      placeholder="{{label}}"
      required="true"
      ref={{inputName}}
      {{#if value}}
        value={{value}}
      {{else}}
        value=""
      {{/if}}
    />
    `;
  }
}
