import Block from '../../utils/Block';

interface ErrorPageProps{
  statusCode:string;
  message:string;
}

export class ErrorPage extends Block<ErrorPageProps> {
  static componentName = 'ErrorPage'
  protected render(): string {
    return `
    <main class="error">
    <div class="error__box">
      <p class="error__code">{{statusCode}}</p>
      <p class="error__status">{{message}}</p>
      <button class="error__back" type="button">Назад к чатам</button>
    </div>
  </main>
  `;
  }
}
