import { FormProps } from '../../../../partials/components/form/form';
import { Block } from '../../../../utils';

interface FormModalProfileProps extends FormProps {
  inputValue:string
}

export class FormModalProfile extends Block<FormModalProfileProps> {
  static componentName = 'FormModalProfile';

  constructor(props: FormModalProfileProps) {
    super({
      ...props,
      events: {
        submit: props.onSubmit,
      },
    });
  }

  protected render(): string {
    return `
    <form class="form" id={{formName}} name={{formName}} novalidate>
    {{#if errorRequest}}
        <span class="modal__title_error">
          Ошибка, попробуйте ещё раз
        </span>
      {{else}}
        <h3 class="modal__title">
        {{#if inputValue}}
          {{readyTitle}}
        {{else}}
          {{title}}
        {{/if}}
        </h3>
      {{/if}}
      {{{Button class="close" type="button" label="Закрыть_окно" onClick=onClick}}}
      {{#if inputValue}}
        <span class="modal__filename">{{inputValue}}</span>
        <label class="modal__label modal__label_hidden">
        {{else}}
          <label class="modal__label">
         {{/if}}
         Выбрать файл на компьютере
            {{{InputProfile
              class="modal__input"
              type="file"
              inputName=inputName
              accept=".jpg, .jpeg, .png"
              value=inputValue
              ref="inputFile"
            onChange=onChange}}}
          </label>

      {{{Button class="form" type="submit" form=formName caption=buttonName ref=buttonForm}}}
      {{#if errorSubmit}}
          <span class="modal__error-submit">{{errorSubmit}}</span>
        {{/if}}
    </form>`;
  }
}
