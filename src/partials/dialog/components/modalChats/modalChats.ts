import { Modal } from '../../../modal/modal';

export class ModalChats extends Modal {
  static componentName = 'ModalChats';

  protected render(): string {
    return `
    <div class="modal ${this.props.classOpenModal}">
      {{{FormModalChats
        formName=formName
        title=title
        buttonName=buttonName
        fieldName=fieldName
        inputName=inputName
        handleSubmit=handleSubmit
        onClick=onClick}}}
    </div>
  `;
  }
}
