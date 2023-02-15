import UserController from '../../../../controllers/UserController';
import { Modal, ModalProps } from '../../../../partials/modal/modal';

interface ModalProfileProps extends ModalProps {
  onSubmit: () => void;
  submit: string;
  events: { [key: string]: (event: Event) => void };
  handleSubmit: (data: Record<string, string>) => void;
  onChangeInputFile: (e: InputEvent) => void;
  errorMessage: string | null;
  inputValue: string;
  checkInput: () => void;
  changeAvatar: (e: InputEvent) => void;
}

export class ModalProfile extends Modal {
  static componentName = 'ModalProfile';

  static inputValue = '';
  static file = null;
  constructor(props: ModalProfileProps) {
    super({
      ...props,
      onChangeInputFile: (e) => {
        const element = e.target as HTMLInputElement;
        const fileList: FileList | null = element.files;
        if (fileList) {
          console.log(fileList[0].name);
          this.setProps({ file: fileList[0], inputValue: fileList[0].name });
        }
      },
      changeAvatar: async (e: InputEvent) => {
        e.preventDefault();
        if (!this.checkInput()) {
          return;
        }

        const file = this.props.file;
        if (!file) {
          return;
        }
        const formData = new FormData();
        formData.append('avatar', file, this.props.inputValue);

        UserController.changeAvatar(formData).then((res) => {
          window.store.set(res, 'user');
        });
      },
    });
  }

  checkInput() {
    if (this.props.inputValue) {
      return true;
    } else {
      this.refs.formProfile.setProps({ errorSubmit: 'Нужно выбрать файл' });
      return false;
    }
  }

  protected render(): string {
    return `
    <div class="modal ${this.props.classOpenModal}">
      {{{FormModalProfile
        errorTitle=errorTitle
        readyTitle="Файл загружен"
        formName=formName
        title=title
        buttonName=buttonName
        fieldName=fieldName
        inputName=inputName
        inputValue=inputValue
        onSubmit=changeAvatar
        onChange=onChangeInputFile
        onClick=onClick
        ref="formProfile"
      }}}
    </div>
  `;
  }
}
