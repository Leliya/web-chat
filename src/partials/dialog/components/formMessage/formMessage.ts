import ChatsController from '../../../../controllers/ChatsController';
import { Form } from '../../../components/form/form';

export class FormMessage extends Form {
  static componentName = 'FormMessage';

  submitForm(data: Record<string, string>) {
    super.submitForm(data);
    ChatsController.createChat(data)
      .then(() => this.props.onClick())
      .catch((err) => console.log(err));
  }
  protected render(): string {
    return `
    <form class="dialog__form" name="message" id="message" novalidate>
      {{{Button class="close" type="button" label="Закрыть окно" onClick=onClick}}}
      <h2 class="form__title">{{title}}</h2>
      <fieldset class="form__fieldset" form={{formName}}>
        {{{Field label=fieldName type="text"  inputName=inputName minSymbol=2 maxSymbol=30 ref=inputName}}}
      </fieldset>
      <div class="form__control">
        {{{Button class="form" type="submit" form=formName caption=buttonName ref=buttonForm}}}
      </div>
    </form>`;
  }
}
