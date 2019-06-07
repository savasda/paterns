import { ThemeInterface } from './Theme.interface';

export class DarkTheme implements ThemeInterface {
  theme = 'Dark';

  getColor(): string {
    return this.theme;
  }

}
