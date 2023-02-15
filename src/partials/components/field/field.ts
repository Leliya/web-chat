import Block from '../../../utils/Block';
import {
  errorInterpretator,
  validateInput,
  validateInputType,
} from '../../../utils/validateInput';

interface FieldProps {
  type: string;
  inputName: string;
  label: string;
  minlength?: number;
  maxlength?: number;
  errorMessage: string|null;
  classHidden?: string;
  value: string;
  onInput: (e: InputEvent) => void;
  onFocus: (e: Event) => void;
  onBlur: (e: FocusEvent) => void;
}

export class Field extends Block<FieldProps> {
  static componentName = 'Field';
  constructor(props: FieldProps) {
    super({
      ...props,
      errorMessage: '',
      onInput: (e?: InputEvent) => {
        const element = e?.target as HTMLInputElement;
        this.setProps({ value: element.value });
      },
      onFocus: () => {
        this.refs.errorInput.setProps({
          errorMessage: '',
        });
      },
      onBlur: (e?: FocusEvent) => {
        const element = e?.target as HTMLInputElement;
        const resultValidate: validateInputType = validateInput(
          element.value,
          element.name
        );
        if (!resultValidate.isValid) {
          this.refs.errorInput.setProps({
            errorMessage: errorInterpretator(
              resultValidate.errors,
              element.name
            ).message,
          });
        } else {
          this.refs.errorInput.setProps({
            errorMessage: '',
          });
        }
      },
    });
  }

  protected render(): string {
    return `
    <div class="input">
      <label for={{inputName}} class="input__label {{classHidden}}">
        {{label}}
      </label>
      {{{Input
        class="input__input"
        type=type
        inputName=inputName
        label=label
        minlength=minSymbol
        maxLength=maxSymbol
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
