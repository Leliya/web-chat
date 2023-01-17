import Block from '../../../utils/Block';
import {
  validateInput,
  errorInterpretator,
  validateInputType,
} from '../../../utils/validateInput';

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
  static componentName = 'Form';

  constructor(props: FormProps) {
    super({
      ...props,
      onClick: (e: Event) => {
        e.preventDefault();
        const dataForm: Record<string, string> = {};
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
              errorMessage: errorInterpretator(resultValidate.errors, inputName)
                .message,
            });
          }
        );
        console.log(dataForm);
        const isInvalidForm: boolean = validationResult.some(
          (inputIsValid: boolean) => inputIsValid === false
        );
        console.log(isInvalidForm);
      },
    });
  }
}
