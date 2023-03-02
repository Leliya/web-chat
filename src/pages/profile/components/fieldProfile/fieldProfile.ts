import { Field } from '../../../../partials/components/field/field';

export class FieldProfile extends Field {
  static componentName = 'FieldProfile';
  protected render(): string {
    return `
    <label class="profile__label">
      {{label}}
      {{{Input
        class="profile__input"
        type=type
        inputName=inputName
        label=label
        minlength=minSymbol
        maxLength=maxSymbol
        onBlur=onBlur
        onFocus=onFocus
        value=value
        ref="input"
        disabled=disabled
      }}}
      {{{ErrorInput ref="errorInput" class="profile__error"}}}
    </label>
    `;
  }
}
