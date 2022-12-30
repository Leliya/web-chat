import Block from '../../../utils/Block';
import { validateInput } from '../../../utils/validateForm';

interface FieldProps{
  errorMessage:string;
  value:string;
  onInput:(e: InputEvent) => void;
  onFocus:(e: Event) => void;
  onBlur:(e: FocusEvent) => void;
}

export class Field extends Block<FieldProps> {
  static componentName = 'Field'
  constructor(props:FieldProps) {
    super({
      ...props,
      errorMessage: '',
      value: '',
      onInput: (e:InputEvent) => {
        const element =  e.target as HTMLInputElement
        this.setProps({value: element.value})
      },
      onFocus: () => {
        this.refs.errorInput.setProps({
        errorMessage: '',
      })},
      onBlur: (e:FocusEvent) => {
        const element =  e.target as HTMLInputElement
        const message: string = validateInput(
          element.value,
          element.name
        );
        if (message) {
          this.refs.errorInput.setProps({
            errorMessage: message,
          });
        } else {
          this.refs.errorInput.setProps({
            errorMessage: '',
          });
        }
      },
    });
    //this.refs.errorInput.setProps({errorMessage:""})
  }

  protected render(): string {
    return `
    <div class="input">
      <label for={{input.inputName}} class="input__label {{classHidden}}">
        {{input.label}}
      </label>
      {{{Input
        class="input__input"
        type=input.type
        inputName=input.inputName
        label=input.label
        minlength=input.minSymbol
        maxLength=input.maxSymbol
        onBlur=onBlur
        onFocus=onFocus
        value=value
        ref="input"
      }}}
        {{{ErrorInput ref="errorInput" class="input__error"}}}
    </div>
    `;
  }
}
