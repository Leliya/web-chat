import { Block } from '../../utils/';

interface MenuProps {
  item: object[];
  type: string;
  classOpenMenu: string;
}

export class Menu extends Block<MenuProps> {
  static componentName = 'Menu';
  protected render(): string {
    return `
    <ul class="menu {{classOpenMenu}} menu_{{type}}">
      {{#each dataMenu}}
        {{{MenuItem item=this}}}
      {{/each}}
    </ul>
  `;
  }
}
