import Block from '../../../utils/Block';
import image from '../../../../static/profile-avatar-plug.svg';

interface AvatarProps {
  class: string;
  events: { [key: string]: (event: Event) => void };
  click: string;
  onClick: (event: Event) => void;
  avatarUrl: () => Nullable<string>;
  data: Indexed;
  avatar: string;
}

class Avatar extends Block<AvatarProps> {
  static componentName = 'Avatar';
  static image = image;

  constructor(props: AvatarProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }

  protected render(): string {
    return `
    <div class="{{class}} avatar"
      {{#if avatar}}
        style="background-image: url({{avatar}});background-size: cover;"
      {{else}}
        style="background-image: url(${Avatar.image});background-size: 50%;"
      {{/if}}
    ></div>
    `;
  }
}

export default Avatar;
