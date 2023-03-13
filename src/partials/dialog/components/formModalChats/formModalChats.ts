import { Form } from '../../../components/form/form';

export class FormModalChats extends Form {
  static componentName = 'FormModalChats';

  submitForm(data: Indexed) {
    super.submitForm(data);
    this.props.handleSubmit(data);
  }

  protected render(): string {
    return `
    <form class="form" id={{formName}} name={{formName}} novalidate>
      {{{Button class="close" type="button" label="Закрыть_окно" onClick=onClick}}}
      <h2 class="form__title">{{title}}</h2>
      {{#if inputName}}
      <fieldset class="form__fieldset" form={{formName}}>
        {{{Field label=fieldName type="text"  inputName=inputName minSymbol=2 maxSymbol=30 ref=inputName}}}
      </fieldset>
      {{/if}}
      <div class="form__control">
        {{{Button class="form" type="submit" form=formName caption=buttonName ref=buttonForm}}}
      </div>
    </form>`;
  }
}
