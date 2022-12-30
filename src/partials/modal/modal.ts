import Block from '../../utils/Block';

interface ModalProps {
  inputsUser: object;
  inputsPassword: object;
  class: string;
  title: string;
  errorRequest: boolean;
  form: string;
  buttonName: string;
  errorSubmit: string;
}

export class Modal extends Block<ModalProps> {
  static componentName = 'Modal'
  protected render(): string {
    return `
    <div class="modal {{class}}">
  <div class="modal__box">
    {{#if errorRequest}}
      <span class="modal__title_error">
        Ошибка, попробуйте ещё раз
      </span>
    {{else}}
      <h3 class="modal__title">
        {{title}}
      </h3>
    {{/if}}
    {{> @partial-block }}
    {{{Button class="form" type="submit" form=form caption=buttonName}}}
    {{#if errorSubmit}}
      <span class="modal__error-submit">{{errorSubmit}}</span>
    {{/if}}
  </div>
</div>
  `;
  }
}
