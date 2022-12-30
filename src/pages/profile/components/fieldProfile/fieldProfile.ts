import { Field } from '../../../../partials/components/field/field';

export class FieldProfile extends Field {
  static componentName = 'FieldProfile'
  protected render(): string {
    return `
    <label class="profile__label">
      {{input.label}}
      {{{Input
        class="profile__input"
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
      {{{ErrorInput ref="errorInput" class="profile__error"}}}
    </label>
    `;
  }
}
