import Block from '../../utils/Block';

export interface ModalProps {
  title: string;
  errorRequest: boolean;
  form: string;
  buttonName: string;
  errorSubmit: string;
  classOpenModal: string;
  onChangeInputFile: (e: InputEvent) => void;
  inputValue: string;
  onSubmit: () => void;
  submit: string;
  events: { [key: string]: (event: Event) => void };
  changeAvatar: (e: InputEvent) => void;
  file: Nullable<File>;
}

export class Modal extends Block<ModalProps> {
  static componentName = 'Modal';
  static classOpenModal: '';

  constructor(props: ModalProps) {
    super(props);
  }

  toggleDisplayElement() {
    if (!this.props.classOpenModal) {
      this.setProps({ classOpenModal: 'modal_opened' });
    } else {
      this.setProps({ classOpenModal: '' });
    }
  }

  protected render(): string {
    return ``;
  }
}
