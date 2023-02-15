import Block from '../../../utils/Block';
import { RouterInterface } from '../../../utils/Router/RouterInterface';
import Store from '../../../utils/Store';
import {
  validateInput,
  errorInterpretator,
  validateInputType,
} from '../../../utils/validateInput';

export interface FormProps {
  componentName: string;
  router: RouterInterface;
  store: Store<AppState>;
  user: User | null;
  onClick: () => void;
  onSubmit: () => void;
  submit: string;
  formName: string;
  buttonName: string;
  buttonForm: string;
  title: string;
  linkName?: string;
  inputs: object[];
  events: { [key: string]: (event: Event) => void };
  handleClickLogout?: () => void;
  handleClickChangeProgile?: () => void;
  handleClickChangePassword?: () => void;
  handleSubmit: (data: Record<string, string>) => void;
  onChangeInputFile: (e: InputEvent) => void;
  errorMessage: string | null;
  inputValue: string;
  isChangePassword: boolean;
  isStaticDataProfile: boolean;
}

export class Form extends Block<FormProps> {
  static componentName = 'Form';

  constructor(props: FormProps) {
    super({
      ...props,
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          let dataForm: Record<string, string> = {};
          const validationResult: boolean[] = [];
          Object.entries(this.refs).forEach(
            (item: [string, Block<FormProps>]): void => {
              const inputName: string = item[0];
              const field: Block<FormProps> = item[1];
              const input = field.refs.input.element as HTMLInputElement;
              dataForm[inputName] = input?.value;
              const resultValidate: validateInputType = validateInput(
                input?.value,
                inputName
              );
              validationResult.push(resultValidate.isValid);
              const error: Block<FormProps> = field.refs.errorInput;
              error.setProps({
                errorMessage: errorInterpretator(
                  resultValidate.errors,
                  inputName
                ).message,
              });
            }
          );

          const isInvalidForm: boolean = validationResult.some(
            (inputIsValid: boolean) => inputIsValid === false
          );
          if (!isInvalidForm) {
            this.submitForm(dataForm);
          }
          dataForm = {};
        },
      },
    });
  }
  submitForm(data?: Indexed) {
    return;
  }
}
