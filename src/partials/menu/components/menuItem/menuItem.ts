import { Block } from '../../../../utils';

interface MenuItemProps {
  item: object[];
  caption: string;
  class: string;
}

export class MenuItem extends Block<MenuItemProps> {
  static componentName = 'MenuItem'

  protected render(): string {
    return `
    <li class="menu-item">
      <button class="menu-item__button" type="button">
        <div class="menu-item__icon menu-item__icon_{{item.class}}"></div>
        {{item.caption}}
      </button>
    </li>
  `;
  }
}
