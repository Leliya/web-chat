import { Block } from '../../utils/';

export interface MenuProps {
  item: object[];
  type: string;
  classOpenMenu: string;
  menuOpened: boolean;
}

export class Menu extends Block<MenuProps> {
  static componentName = 'Menu';
  static classOpenMenu: '';

  constructor(props: MenuProps) {
    super(props);
  }

  toggleDisplayElement() {
    if (!this.props.classOpenMenu) {
      this.setProps({ classOpenMenu: 'menu_opened' });
    } else {
      this.setProps({ classOpenMenu: '' });
    }
  }

  protected render(): string {
    return ``;
  }
}
