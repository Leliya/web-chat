import { Block } from '../../../../utils';

interface MenuItemProps {
  item: object[];
  caption: string;
  class: string;
  events: { [key: string]: (event: Event) => void };
  click: string;
  onClick: (event: Event) => void;
}

export class MenuItem extends Block<MenuItemProps> {
  static componentName = 'MenuItem';

  constructor(props: MenuItemProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }

  protected render(): string {
    return `
    <li class="menu-item">
      <button class="menu-item__button" type="button">
        <div class="menu-item__icon menu-item__icon_{{class}}"></div>
        {{caption}}
      </button>
    </li>
  `;
  }
}
