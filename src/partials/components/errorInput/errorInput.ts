import Block from '../../../utils/Block';
interface ErrorInputProps{
  class:string,
  errorMessage?:string
}

export class ErrorInput extends Block<ErrorInputProps> {
  static componentName = 'ErrorInput'

  protected render(): string {
    return `
    <span class={{class}}>
    {{#if errorMessage}}
       {{errorMessage}}
     {{/if}}
    </span>
    `;
  }
}



// {{#if errorMessage}}
// <span class="input__error">
//   {{errorMessage}}
// </span>
// {{/if}}
