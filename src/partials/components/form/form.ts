import Block from '../../../utils/Block';
import { validateInput } from '../../../utils/validateForm';

interface FormProps {
  onClick: (e: Event) => void;
  formName: string;
  buttonName: string;
  buttonForm: string;
  title: string;
  linkName: string;
  inputs: object[];
}

export class Form extends Block<FormProps> {
  static componentName = 'Form'

  constructor(props: FormProps) {
    super({
      ...props,
      onClick: (e: Event) => {
        e.preventDefault();
        const dataForm: Record<string, string> = {};
        const validationResult: string[] = [];
        Object.entries(this.refs).forEach(
          (item: [string, Block<FormProps>]): void => {
            const inputName: string = item[0];
            const field: Block<FormProps> = item[1];
            const input = field.refs.input.element as HTMLInputElement;
            dataForm[inputName] = input?.value;
            validationResult.push(validateInput(input?.value, inputName));
            const error: Block<FormProps> = field.refs.errorInput;
            error.setProps({
              errorMessage: validateInput(input?.value, inputName),
            });
          }
        );
        console.log(dataForm);
        const isInvalid: boolean = validationResult.some(
          (message: string) => message
        );
        console.log(isInvalid);
      },
    });
  }

  protected render(): string {
    return `
      <div class="form-container">
        <form class="form" id={{formName}} name={{formName}} novalidate>
          <h2 class="form__title">{{title}}</h2>
          <fieldset class="form__fieldset" form={{formName}}>
            {{#each inputs}}
              {{{Field input=this ref=this.inputName}}}
            {{/each}}
          </fieldset>
          <div class="form__control">
            {{{Button class="form" type="submit" form=formName caption=buttonName onClick=onClick ref=buttonForm}}}
            <a href="../{{link}}/{{link}}.html" class="form__link">{{linkName}}</a>
          </div>
        </form>
      </div>`;
  }
}
