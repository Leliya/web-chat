import Block from '../../../utils/Block';

interface AvatarProps{
  class:string;
}

export class Avatar extends Block<AvatarProps> {
  static componentName = 'Avatar'
  protected render(): string {
    return `
    <div class="{{class}} avatar"></div>
    `;
  }
}
