import { Menu } from '../../../menu/menu';

export class MenuInsert extends Menu {
  static componentName = 'MenuInsert';

  protected render(): string {
    //console.log(this.props);
    return `
    <ul class="menu ${this.props.classOpenMenu} menu_insert">
        {{{MenuItem class="add-media" caption="Фото или Видео" ref="menuItem-media"}}}
        {{{MenuItem class="add-file" caption="Файл" ref="menuItem-file"}}}
        {{{MenuItem class="add-location" caption="Локация" ref="menuItem-location"}}}
    </ul>
  `;
  }
}
