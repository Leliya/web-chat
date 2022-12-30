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
      placeholder={{label}}
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

// <div class="input">
// <label for={{input.inputName}} class="input__label">
//   {{input.label}}
// </label>
// <input
//   class="input__input"
//   type={{input.type}}
//   name={{input.inputName}}
//   id={{input.inputName}}
//   placeholder={{input.label}}
//   required="true"
//   minlength={{input.minSymbol}}
//   maxLength={{input.maxSymbol}}
//   ref={{input.inputName}}
//   onBlur=${this.props.onBlur}
// />
// {{#if input.errorMessage}}
// <span class="input__error">
//   {{errorMessage}}
// </span>
// {{/if}}
// </div>
