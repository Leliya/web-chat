import Block from '../../../utils/Block';
import './input.css';

interface InputProps {
  events: { [key: string]: (event: FocusEvent) => void };
  blur: string;
  focus: string;
  onBlur: (event: FocusEvent) => void;
  onFocus: (event: FocusEvent) => void;
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
      autocomplete="off"
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
      {{#if disabled}}
      disabled
      {{/if}}
    />
    `;
  }
}
